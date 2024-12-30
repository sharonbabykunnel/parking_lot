class ParkingLot {
  constructor(slots) {
    this.maxSlots = slots;
    this.slots = new Array(slots).fill(null);
  }

  park(registrationNo, color) {
    const nextSlot = this.slots.findIndex((slot) => slot === null);

    if (nextSlot === -1) {
      return "Sorry, parking lot is full";
    }

    this.slots[nextSlot] = {
      registrationNo,
      color,
    };

    return `Allocated slot number: ${nextSlot + 1}`;
  }

  leave(slotNumber) {
    if (slotNumber < 1 || slotNumber > this.maxSlots) {
      return "Invalid slot number";
    }

    if (this.slots[slotNumber - 1] === null) {
      return "Slot already empty";
    }

    this.slots[slotNumber - 1] = null;
    return `Slot number ${slotNumber} is free`;
  }

  status() {
    let output = "Slot No.\tRegistration No\tColor\n";
    this.slots.forEach((slot, index) => {
      if (slot !== null) {
        output += `${index + 1}\t${slot.registrationNo}\t${slot.color}\n`;
      }
    });
    return output;
  }

  getRegistrationNumbersForColor(color) {
    const registrationNumbers = this.slots
      .filter(
        (slot) =>
          slot !== null && slot.color.toLowerCase() === color.toLowerCase()
      )
      .map((slot) => slot.registrationNo);

    return registrationNumbers.length > 0
      ? registrationNumbers.join(" ")
      : "Not found";
  }

  getSlotNumbersForColor(color) {
    const slotNumbers = this.slots
      .map((slot, index) =>
        slot !== null && slot.color.toLowerCase() === color.toLowerCase()
          ? index + 1
          : null
      )
      .filter((slot) => slot !== null);

    return slotNumbers.length > 0 ? slotNumbers.join(", ") : "Not found";
  }

  getSlotNumberForRegistration(registrationNo) {
    const slotNumber = this.slots.findIndex(
      (slot) => slot !== null && slot.registrationNo === registrationNo
    );

    return slotNumber !== -1 ? (slotNumber + 1).toString() : "Not found";
  }
}

module.exports = ParkingLot