import React from 'react'
import './Navbar.style.css'
const Navbar = () => {
    
    return (
        <div>
            <nav className=" navbar-shadow navbar navbar-expand-lg navbar-dark is-navbar-dark w-100 ">
                <div className="container px-0">
                    <a className="navbar-brand" href="./index.html"><img src="https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-picture-icon-png-image_890152.jpg" width="40vb" height="40vh" alt="geeks UI logo" /></a>
                    {/* <!-- Button --> */}
                    <button className="navbar-toggler collapsed allign-item-navbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar top-bar mt-0"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                    {/* <!-- Collapse --> */}
                    <div className="collapse navbar-collapse " id="navbar-default">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nd  nav-link dropdown-toggle pt-4 navbar-ul-style" href="#" id="navbarLanding" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Landings
                                </a>
                                <ul className="dropdown-menu " aria-labelledby="navbarLanding">
                                    <li>
                                        <h4 className="dropdown-header">Landings</h4>
                                    </li>
                                    <li>
                                        <a href="https://geeksui.codescandy.com/geeks/pages/landings/landing-education.html" className=" dropdown-item d-flex justify-content-between align-items-center">
                                            Education <span className=" badge bg-primary ms-1">New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://geeksui.codescandy.com/geeks/pages/landings/home-academy.html" className=" dropdown-item ">
                                            Home Academy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://geeksui.codescandy.com/geeks/pages/landings/landing-courses.html" className=" dropdown-item">
                                            Courses
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://geeksui.codescandy.com/geeks/pages/landings/course-lead.html" className=" dropdown-item">
                                            Lead Course
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://geeksui.codescandy.com/geeks/pages/landings/request-access.html" className="dropdown-item">
                                            Request Access
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://geeksui.codescandy.com/geeks/pages/landings/landing-sass.html" className="dropdown-item">
                                            SaaS
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://geeksui.codescandy.com/geeks/pages/landings/landing-job.html" className="dropdown-item ">
                                            Job
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nd nav-link dropdown-toggle pt-4 navbar-ul-style" href="#" id="navbarPages" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pages
                                </a>
                                <ul className="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarPages">
                                    <li className="dropdown-submenu dropend">
                                        <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                            Courses
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/course-single.html">
                                                    Course Single
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/course-single-v2.html">
                                                    Course Single v2
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/course-resume.html">
                                                    Course Resume
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/course-category.html">
                                                    Course Category
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/course-checkout.html">
                                                    Course Checkout
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/course-filter-list.html">
                                                    Course List/Grid
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/add-course.html">
                                                    Add New Course
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropend">
                                        <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                            Paths
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="https://geeksui.codescandy.com/geeks/pages/course-path.html" className="dropdown-item">
                                                    Browse Path
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://geeksui.codescandy.com/geeks/pages/course-path-single.html" className="dropdown-item">
                                                    Path Single
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropend">
                                        <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                            Blog
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/blog.html">
                                                    Listing</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/blog-single.html">
                                                    Article
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/blog-category.html">
                                                    Category</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/blog-sidebar.html">
                                                    Sidebar</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropend">
                                        <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                            Career
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/career.html">
                                                    Overview</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/career-list.html">
                                                    Listing
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/career-single.html">
                                                    Opening</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropend">
                                        <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                            Portfolio
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/portfolio.html">
                                                    List</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/portfolio-single.html">
                                                    Single
                                                </a>
                                            </li>


                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropend">
                                        <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                            Job
                                        </a>
                                        <ul className="dropdown-menu">

                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/landings/landing-job.html">
                                                    Home</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/jobs/job-listing.html">
                                                    List
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/jobs/job-grid.html">
                                                    Grid
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/jobs/job-single.html">
                                                    Single
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/jobs/company-list.html">
                                                    Company List
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/jobs/company-about.html">
                                                    Company Single
                                                </a>
                                            </li>


                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropend">
                                        <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                            Specialty
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/coming-soon.html">
                                                    Coming Soon
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/404-error.html">
                                                    Error 404
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/maintenance-mode.html">
                                                    Maintenance Mode
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/terms-condition-page.html">
                                                    Terms &amp; Conditions
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <hr className="mx-3" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/about.html">
                                            About
                                        </a>
                                    </li>
                                    <li className="dropdown-submenu dropend">
                                        <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                            Help Center
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/help-center.html">
                                                    Help Center
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/help-center-faq.html">
                                                    FAQ's
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/help-center-guide.html">
                                                    Guide
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/help-center-guide-single.html">
                                                    Guide Single
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/help-center-support.html">
                                                    Support
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/pricing.html">
                                            Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/compare-plan.html">
                                            Compare Plan
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/contact.html">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nd nav-link dropdown-toggle pt-4 navbar-ul-style" href="#" id="navbarAccount" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Accounts
                                </a>
                                <ul className="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarAccount">
                                    <li>
                                        <h4 className="dropdown-header">Accounts</h4>
                                    </li>
                                    <li className="dropdown-submenu dropend">
                                        <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                            Instructor
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="text-wrap">
                                                <h5 className="dropdown-header text-dark">Instructor</h5>
                                                <p className="dropdown-text mb-0">
                                                    Instructor dashboard for manage courses and earning.
                                                </p>
                                            </li>
                                            <li>
                                                <hr className="mx-3" />
                                            </li>
                                            <li>
                                                <a className=" dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/dashboard-instructor.html">
                                                    Dashboard</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/instructor-profile.html">
                                                    Profile</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/instructor-courses.html">
                                                    My Courses
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/instructor-order.html">
                                                    Orders</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/instructor-reviews.html">
                                                    Reviews</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/instructor-students.html">
                                                    Students</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/instructor-payouts.html">
                                                    Payouts</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/instructor-earning.html">
                                                    Earning</a>
                                            </li>
                                            <li className="dropdown-submenu dropend">
                                                <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                                    Quiz
                                                    <span className="badge bg-primary ms-1"> New </span>
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/instructor-quiz.html">
                                                            Quiz</a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/instructor-quiz-details.html">
                                                            Single</a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/instructor-quiz-result.html">
                                                            Result</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropend">
                                        <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                            Students
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="text-wrap">
                                                <h5 className="dropdown-header text-dark">Students</h5>
                                                <p className="dropdown-text mb-0">
                                                    Students dashboard to manage your courses and subscriptions.
                                                </p>
                                            </li>
                                            <li>
                                                <hr className="mx-3" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/dashboard-student.html">
                                                    Dashboard</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/student-subscriptions.html">
                                                    Subscriptions
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/payment-method.html">
                                                    Payments</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/billing-info.html">
                                                    Billing Info</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/invoice.html">
                                                    Invoice</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/invoice-details.html">
                                                    Invoice Details</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/dashboard-student.html">
                                                    Bookmarked</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/dashboard-student.html">
                                                    My Path</a>
                                            </li>
                                            <li className="dropdown-submenu dropend">
                                                <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                                    Quiz
                                                    <span className="badge bg-primary ms-1"> New </span>
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/student-quiz.html">
                                                            Quiz</a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/student-quiz-attempt.html">
                                                            Attempt</a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/student-quiz-start.html">
                                                            Start</a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/student-quiz-result.html">
                                                            Result</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <hr className="mx-3" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/sign-in.html">
                                            Sign In
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/sign-up.html">
                                            Sign Up
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/forget-password.html">
                                            Forgot Password
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/profile-edit.html">
                                            Edit Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/security.html">
                                            Security
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/social-profile.html">
                                            Social Profiles
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/notifications.html">
                                            Notifications
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/profile-privacy.html">
                                            Privacy Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/delete-profile.html">
                                            Delete Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://geeksui.codescandy.com/geeks/pages/linked-accounts.html">
                                            Linked Accounts
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item ">
                                <a className=" nd nav-link pt-4 navbar-ul-style" href="https://geeksui.codescandy.com/geeks/pages/dashboard/admin-dashboard.html">
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nd nav-link dropdown-toggle pt-4 navbar-ul-style" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Docs
                                </a>
                                <div className="dropdown-menu dropdown-menu-md" aria-labelledby="navbarDropdown">
                                    <div className="list-group">
                                        <a className="list-group-item list-group-item-action border-0" href="https://geeksui.codescandy.com/geeks/docs/index.html">
                                            <div className="d-flex align-items-center">
                                                <i className="fe fe-file-text fs-3 text-primary"></i>
                                                <div className="ms-3">
                                                    <h5 className="mb-0">Documentations</h5>
                                                    <p className="mb-0 fs-6">
                                                        Browse the all documentation
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="list-group-item list-group-item-action border-0" href="https://geeksui.codescandy.com/geeks/docs/bootstrap-5-snippets.html">
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-files fs-3 text-primary"></i>
                                                <div className="ms-3">
                                                    <h5 className="mb-0">
                                                        Snippet
                                                    </h5>
                                                    <p className="mb-0 fs-6">Bunch of Snippet</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="list-group-item list-group-item-action border-0" href="https://geeksui.codescandy.com/geeks/docs/changelog.html">
                                            <div className="d-flex align-items-center">
                                                <i className="fe fe-layers fs-3 text-primary"></i>
                                                <div className="ms-3">
                                                    <h5 className="mb-0">
                                                        Changelog <span className="text-primary ms-1" id="changelog">v3.1.1</span>
                                                    </h5>
                                                    <p className="mb-0 fs-6">See what's new</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="list-group-item list-group-item-action border-0" href="https://geeksui.codescandy.com/geeks-rtl/index.html" target="_blank">
                                            <div className="d-flex align-items-center">
                                                <i className="fe fe-toggle-right fs-3 text-primary"></i>
                                                <div className="ms-3">
                                                    <h5 className="mb-0">RTL demo</h5>
                                                    <p className="mb-0 fs-6">
                                                        RTL Pages
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="ms-auto  ">

                            <a href="https://bit.ly/geeksui" className="btn  btn-prime login-button-nav "><i class="bi bi-person-plus-fill icon-login"></i> &nbsp; Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar