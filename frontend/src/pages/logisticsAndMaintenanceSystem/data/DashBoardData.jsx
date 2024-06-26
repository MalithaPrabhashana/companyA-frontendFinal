import per1 from "../../../assets/person/person (1).jpeg";
import per2 from "../../../assets/person/person (2).jpeg";
import per3 from "../../../assets/person/person (3).jpeg";
import per4 from "../../../assets/person/person (4).jpeg";
import per5 from "../../../assets/person/person (5).jpeg";
import per6 from "../../../assets/person/person (6).jpeg";
import per7 from "../../../assets/person/person (7).jpeg";
import per8 from "../../../assets/person/person (8).jpeg";


export const personImages = [per1, per2, per3, per4, per5, per6, per7, per8];

export const dashboardAdminData = [
  {
    name: "Vehicle",
    icon: <i className="bx bxs-car"></i>,
    active: false,
    to: "view-vehicle",
  },
  {
    name: "Machinery",
    icon: <i className="bx bxs-wrench"></i>,
    active: false,
    to: "view-machinery",
  },
  {
    name: "Technician",
    icon: <i className="bx bxs-user"></i>,
    active: false,
    to: "view-technician",
  },
  {
    name: "Vendor",
    icon: <i className="bx bxs-user"></i>,
    active: false,
    to: "view-vendor",
  },
  {
    name: "Service & Maintenance",
    icon: <i className="bx bxs-cog"></i>,
    active: false,
    to: "view-services-maintenance",
  },
];