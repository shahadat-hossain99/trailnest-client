// components/Listing/BookingModal.tsx
"use client";

import { useState, useEffect } from "react";
import {
  X,
  Calendar,
  Users,
  DollarSign,
  AlertCircle,
  Info,
  Shield,
} from "lucide-react";
import { format, differenceInDays, isAfter, isBefore, isEqual } from "date-fns";
import { toast } from "sonner";
import Button from "@/components/Ui/Button";
import Input from "@/components/Ui/Input";
import { serverMutation, serverFetch } from "@/lib/core/server";

interface BookingModalProps {
  listingId: string;
  pricePerDay: number;
  onClose: () => void;
  onSuccess: () => void;
}

interface Booking {
  _id: string;
  startDate: string;
  endDate: string;
  status: string;
}

const BookingModal = ({
  listingId,
  pricePerDay,
  onClose,
  onSuccess,
}: BookingModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [guests, setGuests] = useState(1);
  const [specialNote, setSpecialNote] = useState("");
  const [existingBookings, setExistingBookings] = useState<Booking[]>([]);
  const [errors, setErrors] = useState({
    startDate: "",
    endDate: "",
    guests: "",
    conflict: "",
  });

  // Fetch existing bookings for conflict check
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await serverFetch<Booking[]>(
          `/bookings/listing/${listingId}`,
        );
        setExistingBookings(data || []);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, [listingId]);

  const calculateTotal = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.max(1, differenceInDays(end, start));
    return days * pricePerDay;
  };

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.max(1, differenceInDays(end, start));
  };

  const checkConflict = (start: Date, end: Date): boolean => {
    // Check against existing confirmed bookings
    const confirmedBookings = existingBookings.filter(
      (b) => b.status === "confirmed",
    );

    for (const booking of confirmedBookings) {
      const bookingStart = new Date(booking.startDate);
      const bookingEnd = new Date(booking.endDate);

      // Check if dates overlap
      const overlaps =
        (isAfter(start, bookingStart) && isBefore(start, bookingEnd)) ||
        (isAfter(end, bookingStart) && isBefore(end, bookingEnd)) ||
        isEqual(start, bookingStart) ||
        isEqual(end, bookingEnd) ||
        (isBefore(start, bookingStart) && isAfter(end, bookingEnd));

      if (overlaps) {
        return true;
      }
    }
    return false;
  };

  const validateForm = () => {
    const newErrors = { startDate: "", endDate: "", guests: "", conflict: "" };
    let isValid = true;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!startDate) {
      newErrors.startDate = "Start date is required";
      isValid = false;
    } else {
      const start = new Date(startDate);
      if (isBefore(start, today)) {
        newErrors.startDate = "Start date must be today or a future date";
        isValid = false;
      }
    }

    if (!endDate) {
      newErrors.endDate = "End date is required";
      isValid = false;
    } else if (startDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (!isAfter(end, start)) {
        newErrors.endDate = "End date must be after start date";
        isValid = false;
      }

      // Check minimum booking is 1 day
      const days = differenceInDays(end, start);
      if (days < 1) {
        newErrors.endDate = "Minimum booking is 1 day";
        isValid = false;
      }
    }

    if (guests < 1) {
      newErrors.guests = "At least 1 guest required";
      isValid = false;
    }

    // Check for conflicts
    if (startDate && endDate && isValid) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (checkConflict(start, end)) {
        newErrors.conflict =
          "These dates are already booked. Please select different dates.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const bookingData = {
        listingId,
        startDate,
        endDate,
        guests,
        totalPrice: calculateTotal(),
        specialNote: specialNote.trim() || undefined,
      };

      await serverMutation("/bookings", bookingData, "POST");

      toast.success("🎉 Listing booked successfully!", {
        description: `Your booking from ${format(new Date(startDate), "MMM d, yyyy")} to ${format(new Date(endDate), "MMM d, yyyy")} has been confirmed.`,
        duration: 5000,
      });

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Booking error:", error);

      let errorMessage = "Please try again later.";
      if (error instanceof Error) {
        if (error.message.includes("conflict")) {
          errorMessage =
            "These dates are already booked. Please select different dates.";
          setErrors((prev) => ({ ...prev, conflict: errorMessage }));
        } else {
          errorMessage = error.message;
        }
      }

      toast.error("Failed to book", {
        description: errorMessage,
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Re-validate on date changes
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (isAfter(end, start) && differenceInDays(end, start) >= 1) {
        const hasConflict = checkConflict(start, end);
        if (hasConflict) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setErrors((prev) => ({
            ...prev,
            conflict:
              "These dates are already booked. Please select different dates.",
          }));
        } else {
          setErrors((prev) => ({ ...prev, conflict: "" }));
        }
      }
    }
  }, [startDate, endDate, existingBookings]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-(--dark)">Book Now</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-(--dark)">
              Start Date <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  if (errors.startDate) setErrors({ ...errors, startDate: "" });
                }}
                min={new Date().toISOString().split("T")[0]}
                className={`pl-10 ${errors.startDate ? "border-red-500" : ""}`}
                disabled={isLoading}
              />
            </div>
            {errors.startDate && (
              <p className="mt-1 flex items-center gap-1 text-sm text-red-500">
                <AlertCircle className="h-3 w-3" />
                {errors.startDate}
              </p>
            )}
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-(--dark)">
              End Date <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  if (errors.endDate) setErrors({ ...errors, endDate: "" });
                }}
                min={startDate || new Date().toISOString().split("T")[0]}
                className={`pl-10 ${errors.endDate ? "border-red-500" : ""}`}
                disabled={isLoading}
              />
            </div>
            {errors.endDate && (
              <p className="mt-1 flex items-center gap-1 text-sm text-red-500">
                <AlertCircle className="h-3 w-3" />
                {errors.endDate}
              </p>
            )}
          </div>

          {/* Conflict Error */}
          {errors.conflict && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200 flex items-start gap-2">
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>{errors.conflict}</span>
            </div>
          )}

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-(--dark)">
              Number of Guests <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="number"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => {
                  setGuests(parseInt(e.target.value) || 1);
                  if (errors.guests) setErrors({ ...errors, guests: "" });
                }}
                className={`pl-10 ${errors.guests ? "border-red-500" : ""}`}
                disabled={isLoading}
              />
            </div>
            {errors.guests && (
              <p className="mt-1 flex items-center gap-1 text-sm text-red-500">
                <AlertCircle className="h-3 w-3" />
                {errors.guests}
              </p>
            )}
          </div>

          {/* Special Note */}
          <div>
            <label className="block text-sm font-medium text-(--dark)">
              Special Note{" "}
              <span className="text-xs text-(--text-secondary)">
                (optional)
              </span>
            </label>
            <div className="relative mt-1.5">
              <textarea
                value={specialNote}
                onChange={(e) => setSpecialNote(e.target.value)}
                placeholder="Any special requests or notes for the host..."
                rows={3}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/20 placeholder:text-gray-400"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Total Price */}
          {startDate && endDate && !errors.conflict && (
            <div className="rounded-xl bg-(--primary)/5 p-4 border border-(--primary)/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-(--primary)" />
                  <span className="font-medium text-(--dark)">Total Price</span>
                </div>
                <span className="text-2xl font-bold text-(--primary)">
                  ${calculateTotal()}
                </span>
              </div>
              <p className="mt-1 text-xs text-(--text-secondary)">
                ${pricePerDay} × {calculateDays()} day
                {calculateDays() > 1 ? "s" : ""}
              </p>
            </div>
          )}

          {/* Availability Info */}
          {startDate && endDate && !errors.conflict && (
            <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 p-2 rounded-lg">
              <Info className="h-4 w-4" />
              <span>✓ These dates are available!</span>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full py-3"
            disabled={isLoading || !!errors.conflict}
          >
            {isLoading ? "Booking..." : "Confirm Booking"}
          </Button>

          <p className="text-center text-xs text-(--text-secondary)">
            <Shield className="inline h-3 w-3 mr-1" />
            Your payment is secure and your booking is guaranteed.
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
