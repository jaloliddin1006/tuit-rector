import React from "react";
import DesktopLayout from "../layout/DesktopLayout";
import LoginLayout from "../layout/LoginLayout";


const Teachers = React.lazy(() => import("../views/Teachers"));
const NumberOfStudents = React.lazy(() => import("../views/NumberOfStudents"));
const Home = React.lazy(() => import("../views/Home"));
const StudentsResidence = React.lazy(() => import("../views/StudentsResidence"));
const TuitBranches = React.lazy(() => import("../views/TuitBranches"));
const SocialStatus = React.lazy(() => import("../views/SocialStatus"));
// const StudentsRating = React.lazy(() => import("../views/StudentsRating"));
// const GiftedStudents = React.lazy(() => import("../views/GiftedStudents"));
const FacultyTeachers = React.lazy(() => import("../views/FacultyTeachers"));
const StudentsList = React.lazy(() => import("../views/StudentsList"));
const AllFaculties = React.lazy(() => import("../views/AllFaculties"));
const StudentsTable = React.lazy(() => import("../views/StudentsTable"));
// const StudentsRatingList = React.lazy(() => import("../views/StudentsRatingList"));
const LoginPage = React.lazy(() => import("../views/LoginPage"));




export const RoutesConfig = [{
    title: "",
    path: "/teachers",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: Teachers,
  },
  {
    title: "",
    path: "/students",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: NumberOfStudents,
  },
  {
    title: "",
    path: "/",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: Home,
  },
  {
    title: "",
    path: "/students-residence",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: StudentsResidence,
  },
  {
    title: "",
    path: "/tuit-branches",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: TuitBranches,
  },
  {
    title: "",
    path: "/social-status",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: SocialStatus,
  },
  // {
  //   title: "",
  //   path: "/students-rating",
  //   Layout: DesktopLayout,
  //   roles: [],
  //   subOptions: [],
  //   Component: StudentsRating,
  // },
  // {
  //   title: "",
  //   path: "/gifted-students",
  //   Layout: DesktopLayout,
  //   roles: [],
  //   subOptions: [],
  //   Component: GiftedStudents,
  // },
  {
    title: "",
    path: "/faculty-teachers",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: FacultyTeachers,
  },
  {
    title: "",
    path: "/students-list",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: StudentsList,
  },
  {
    title: "",
    path: "/all-faculties",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: AllFaculties,
  },
  {
    title: "",
    path: "/students-table",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: StudentsTable,
  },
  // {
  //   title: "",
  //   path: "/student-rating-list",
  //   Layout: DesktopLayout,
  //   roles: [],
  //   subOptions: [],
  //   Component: StudentsRatingList,
  // },


  {
    title: "login",
    path: "/login",
    Layout: LoginLayout,
    roles: [],
    subOptions: [],
    Component: LoginPage,
  },
];