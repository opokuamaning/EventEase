# EventEase
EventEase - A Comprehensive Event Management System

Introduction

EventEase is a comprehensive event management system designed to simplify the process of managing events, including event listings, ticket sales, and attendee registration. Our goal is to provide an easy-to-use platform for both event organizers and attendees.
## Authors

- [@opokuamaning](https://www.github.com/opokuamaning)
- [@leslie47](https://www.github.com/leslie47)


## API Reference

#### Get all items

```http
  GET /api/events
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**.  Name of the event |
| `date` | `date` | **Required**. Date of event|
| `location`| `string` | **Required**. Location of event |
| `description` | `string` | **Required**. Description of event |

#### Get item



## Installation

Install and run EventEase locally with these steps:

1. Clone the repository
```bash
git clone https://github.com/opokuamaning/EventEase.git
cd frontend
```
2. Install dependencies:
```bash
yarn
```
3. Set up environment variables:
```bash
tba
```
4. Run application
```bash
yarn dev
```
5. Access the application
```bash
Open your web browser and go to http://localhost:5173.
```


## Usage


Event ease provides a seamless experience o=for managing events. Here are some of the key features:

+ **Event Listings:** Browse and search for upcoming events.
+ **Ticket Sales:** Purchase tickets securely through the integrated payment gateway.
+ **Attendee Registration:** Register for events and receive a unique QR code for entry.
+ **Admin Dashboard:** Manage events, view ticket sales, and track attendee registrations.




## Screenshots

![App Screenshot](Screenshots/Screenshot%202024-07-10%20at%207.41.29 AM.png)


## Contributing

Contributions are always welcome!

1. **Fork the repository**
Click the 'Fork' button at the top right of this page.

2. Create a new branch:
```
git checkout -b feature/your-feature-name
```
3. Make you change and commit:
```
git commit -m "Add your commit message here"
```
4. Push to your branch:
```
git push origin feature/your-feature-name
```
5. Create a pull request
Open a pull request on the original repository and describe your changes.




## Related Projects

Here are some related projects

* [Eventbrite](https://www.eventbrite.com/)
* [TicketMaster](https://www.ticketmaster.com/)
* [Cvent](https://www.cvent.com/)


## License
This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for more details.


