// components/Listing/BookingModal.tsx
"use client";

import { useState } from "react";
import { X, Calendar, Users, DollarSign, AlertCircle } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import Button from "@/components/Ui/Button";
import Input from "@/components/Ui/Input";
import { serverMutation } from "@/lib/core/server";

interface BookingModalProps {
  listingId: string;
  pricePerDay: number;
  onClose: () => void;
  onSuccess: () => void;
}

const BookingModal = ({
  listingId,
  pricePerDay,
  onClose,
  onSuccess,
}: BookingModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [guests, setGuests] = useState(1);
  const [errors, setErrors] = useState({
    startDate: "",
    endDate: "",
    guests: "",
  });

  const calculateTotal = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.max(
      1,
      Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)),
    );
    return days * pricePerDay;
  };

  const validateForm = () => {
    const newErrors = { startDate: "", endDate: "", guests: "" };
    let isValid = true;

    if (!startDate) {
      newErrors.startDate = "Start date is required";
      isValid = false;
    }

    if (!endDate) {
      newErrors.endDate = "End date is required";
      isValid = false;
    } else if (startDate && new Date(endDate) <= new Date(startDate)) {
      newErrors.endDate = "End date must be after start date";
      isValid = false;
    }

    if (guests < 1) {
      newErrors.guests = "At least 1 guest required";
      isValid = false;
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
      };

      await serverMutation("/bookings", bookingData, "POST");

      toast.success("🎉 Booking confirmed!", {
        description: `Your booking from ${format(new Date(startDate), "MMM d, yyyy")} to ${format(new Date(endDate), "MMM d, yyyy")} has been confirmed.`,
      });

      onSuccess();
      onClose();
    } catch (error) {
      toast.error("Failed to book", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-(--dark)">Book Now</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
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

          {/* Total Price */}
          {startDate && endDate && (
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
                ${pricePerDay} ×{" "}
                {Math.max(
                  1,
                  Math.ceil(
                    (new Date(endDate).getTime() -
                      new Date(startDate).getTime()) /
                      (1000 * 60 * 60 * 24),
                  ),
                )}{" "}
                days
              </p>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full py-3"
            disabled={isLoading}
          >
            {isLoading ? "Booking..." : "Confirm Booking"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
