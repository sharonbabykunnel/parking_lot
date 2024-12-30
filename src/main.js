const readline = require("readline");
const fs = require("fs");
const ParkingLot = require('./parkingLot.js');

let parkingLot = null;

const executeCommand = (command) => {
  const parts = command.trim().split(" ");
  const action = parts[0];

  switch (action) {
    case "create_parking_lot":
      parkingLot = new ParkingLot(parseInt(parts[1]));
      return `Created a parking lot with ${parts[1]} slots`;

    case "park":
      if (!parkingLot) return "Please create parking lot first";
      return parkingLot.park(parts[1], parts[2]);

    case "leave":
      if (!parkingLot) return "Please create parking lot first";
      return parkingLot.leave(parseInt(parts[1]));

    case "status":
      if (!parkingLot) return "Please create parking lot first";
      return parkingLot.status();

    case "registration_numbers_for_cars_with_color":
      if (!parkingLot) return "Please create parking lot first";
      return parkingLot.getRegistrationNumbersForColor(parts[1]);

    case "slot_numbers_for_cars_with_color":
      if (!parkingLot) return "Please create parking lot first";
      return parkingLot.getSlotNumbersForColor(parts[1]);

    case "slot_number_for_registration_number":
      if (!parkingLot) return "Please create parking lot first";
      return parkingLot.getSlotNumberForRegistration(parts[1]);

    default:
      return "Invalid command";
  }
};

const processFile = async (filename) => {
  try {
    const fileContent = await fs.promises.readFile(filename, "utf8");
    const commands = fileContent.split("\n");

    for (const command of commands) {
      if (command.trim()) {
        console.log(executeCommand(command));
      }
    }
    process.exit(0);
  } catch (error) {
    console.error("Error reading file:", error);
    process.exit(1);
  }
};

const startInteractiveMode = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "$ ",
  });

  rl.prompt();

  rl.on("line", (line) => {
    if (line.trim().toLowerCase() === "exit") {
      rl.close();
      return;
    }

    console.log(executeCommand(line));
    rl.prompt();
  }).on("close", () => {
    process.exit(0);
  });
};


module.exports = {
  processFile,
  startInteractiveMode,
};