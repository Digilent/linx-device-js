# Linx-device-js

LINX generic device and transport classes

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

1. Node.js
2. NPM

### Subdirectories
* **dist**
  * Contains the built files ready for release.
* **docs**
  * Contains built documentation from source.
* **spec**
  * Contains test files.
* **src**
  * Contains the source files.

### Installing

Clone this repository

```
git clone https://git.digilentinc.com/dsukumar/linx-device-js
```

Move to project directory

```
cd linx-device-js
```

Install dependencies

```
npm install
```

Notes:
1. Proper child classes extend GenericLinxDevice and have a transport data member that extends GenericTransportService

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
