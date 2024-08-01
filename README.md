# Invoice Generator - React App
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses [jspdf-react](https://www.npmjs.com/package/jspdf-react) to capture the data from the modal and covert it from canvas -> pdf.
It is a Spanish taxation law customized version which adds the IRPF component.

### Installation

```
git clone 

npm install

npm start / npm run build
```

### To-Do
- [X] Store private variables in .env or configurable hidden side

- [X] Add IRPF selector for Spanish invoices

- [X] Add bank selector
  
- [ ] Sync invoice number, data, dates, etc. with Google sheets DB

- [ ] Read suppliers from Google Sheets

- [ ] Add payment terms with selector

- [ ] Connect to TicketBai system to electronically sign invoices with the DFG

## Initial Credit

Project is based on a fork from John Uberbacher – [johnuberbacher.com](https://johnuberbacher.com)
