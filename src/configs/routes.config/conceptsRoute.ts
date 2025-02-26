import { lazy } from 'react'
import { CONCEPTS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const conceptsRoute: Routes = [
    {
        key: 'concepts.customers.customerList',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-list`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.customers.customerEdit',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit customer',
                description:
                    'Manage customer details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.customers.customerCreate',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-create`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create Employee',
                description:
                    'Manage customer details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.customers.customerDetails',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-details/:id`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.customers.contactDetails',
        path: `${CONCEPTS_PREFIX_PATH}/customers/contact-details`,
        component: lazy(
            () => import('@/views/concepts/customers/ContactDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Contact Details',
                contained: true,
            },
            footer: false,
        },
    },

    {
        key: 'concepts.customers.familyDetails',
        path: `${CONCEPTS_PREFIX_PATH}/customers/family-details`,
        component: lazy(
            () => import('@/views/concepts/customers/FamilyDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            footer: false,
        },
    },

    {
        key: 'concepts.customers.educationDetails',
        path: `${CONCEPTS_PREFIX_PATH}/customers/education-details`,
        component: lazy(
            () => import('@/views/concepts/customers/EducationDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.customers.passportDetails',
        path: `${CONCEPTS_PREFIX_PATH}/customers/passport-details`,
        component: lazy(
            () => import('@/views/concepts/customers/PassportDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.customers.employeeDetails',
        path: `${CONCEPTS_PREFIX_PATH}/customers/employee-details`,
        component: lazy(
            () => import('@/views/concepts/customers/EmployeeDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.customers.pastEmploymentDetails',
        path: `${CONCEPTS_PREFIX_PATH}/customers/past-employment-details`,
        component: lazy(
            () => import('@/views/concepts/customers/PastEmploymentDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.customers.bankDetails',
        path: `${CONCEPTS_PREFIX_PATH}/customers/bank-details`,
        component: lazy(
            () => import('@/views/concepts/customers/BankDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.customers.employeeOnboarding',
        path: `${CONCEPTS_PREFIX_PATH}/customers/employee-onboarding`,
        component: lazy(
            () => import('@/views/concepts/customers/EmployeeOnboarding'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.leave.leaveList',
        path: `${CONCEPTS_PREFIX_PATH}/leave/leave-list`,
        component: lazy(() => import('@/views/concepts/leave/LeaveList')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Leave',
                // description:
                //     'Quickly manage product details, stock, and availability.',
                contained: true,
            },
            footer: false,
        },
    },

    {
        key: 'concepts.leave.leaveCreate',
        path: `${CONCEPTS_PREFIX_PATH}/leave/leave-create`,
        component: lazy(() => import('@/views/concepts/leave/LeaveCreate')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create Leave',
                // description:
                //     'Quickly manage product details, stock, and availability.',
                contained: true,
            },
            footer: false,
        },
    },

    {
        key: 'concepts.leave.leaveEdit',
        path: `${CONCEPTS_PREFIX_PATH}/leave/leave-edit`,
        component: lazy(() => import('@/views/concepts/leave/LeaveEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit Leave',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.calendar',
        path: `${CONCEPTS_PREFIX_PATH}/calendar`,
        component: lazy(() => import('@/views/concepts/calendar/Calendar')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    // Holiday Master
    {
        key: 'concepts.holiday',
        path: `${CONCEPTS_PREFIX_PATH}/holiday`,
        component: lazy(() => import('@/views/concepts/hoilday/Holiday')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    //Salary Adjustments
    {
        key: 'concepts.salaryAdjustment',
        path: `${CONCEPTS_PREFIX_PATH}/salaryAdjustment`,
        component: lazy(() => import('@/views/concepts/salaryAdjustment/SalaryAdjustment')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
]

export default conceptsRoute
