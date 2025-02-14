# Parking Lot System

An automated ticketing system that allows customers to use a parking lot without human intervention.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation & Setup

### For Linux/Mac OS:

1. Clone the repository:
```bash
git clone https://github.com/sharonbabykunnel/parking_lot.git
cd parking_lot
```

2. Make the setup script executable:
```bash
chmod +x bin/setup.sh
chmod +x bin/parking_lot
```

3. Run the setup script:
```bash
./bin/setup.sh
```

### For Windows:


### For Git Bash:

1. Clone the repository:
```bash
git clone https://github.com/sharonbabykunnel/parking_lot.git
cd parking_lot
```

2. Make the setup script executable:
```bash
chmod +x bin/setup.sh
chmod +x bin/parking_lot
```

3. Run the setup script using Git Bash:
```bash
dos2unix bin/setup.sh
bin\setup.sh
```

Note: Do not use PowerShell Windows or Command Promt setup. Use Git Bash instead.

## Running the Program

### For Linux/Mac/Windows (using Git Bash ) OS:

1. Interactive Mode:
```bash
./bin/parking_lot
```

2. File Input Mode:
```bash
./bin/parking_lot file_inputs.txt
```

## Available Commands

Once the program is running, you can use the following commands:

- `create_parking_lot n` - Create a parking lot with n slots
- `park [registration_number] [color]` - Park a car
- `leave [slot_number]` - Remove car from slot
- `status` - Print status of parking lot
- `registration_numbers_for_cars_with_color [color]` - Get registration numbers of cars of a particular color
- `slot_numbers_for_cars_with_color [color]` - Get slot numbers of cars of a particular color
- `slot_number_for_registration_number [registration_number]` - Get slot number for car with given registration number
- `exit` - Exit the program (in interactive mode)

## Example Usage

```bash
$ create_parking_lot 6
Created a parking lot with 6 slots

$ park KA-01-HH-1234 White
Allocated slot number: 1

$ park KA-01-HH-9999 White
Allocated slot number: 2

$ park KA-01-BB-0001 Black
Allocated slot number: 3

$ status
Slot No.    Registration No    Color
1           KA-01-HH-1234     White
2           KA-01-HH-9999     White
3           KA-01-BB-0001     Black
```


## Troubleshooting

### Linux/ Mac/ Windows-specific Issues:
- If you get "Permission denied" errors, run:
  ```bash
  chmod +x bin/setup.sh
  chmod +x bin/parking_lot
  ```
- Ensure all files have proper line endings (LF for Unix-based systems)
- If the script doesn't run, try:
  ```bash
  dos2unix bin/setup.sh
  dos2unix bin/parking_lot
  ```

## Project Structure
```
parking_lot/
├── bin/
│   ├── setup.sh 
│   └── parking_lot 
├── src/
│   ├── parkingLot.js
│   └── main.js
└── package.json
```