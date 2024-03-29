import React from "react"

interface SvgProps {
    SvgName: string,
    className?: string,
    fill?: string
}

const Svg: React.SFC<SvgProps> = ({
    SvgName,
    className,
    fill
}) => {
    if (SvgName === "user") {
        return (
            <svg width="18" height="16" viewBox="0 0 18 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.00005" cy="4.2" r="3.2" strokeWidth="2" />
                <path d="M2.83825 12.2462C4.28538 11.0198 6.4856 10.2 9 10.2C11.5144 10.2 13.7146 11.0198 15.1618 12.2462C15.5302 12.5584 15.6325 12.8289 15.652 13.0152C15.6726 13.2111 15.6159 13.4539 15.4199 13.7244C15.0114 14.2881 14.1028 14.8 13 14.8H5C3.89725 14.8 2.98857 14.2881 2.5801 13.7244C2.38411 13.4539 2.32744 13.2111 2.34798 13.0152C2.36752 12.8289 2.46985 12.5584 2.83825 12.2462Z" strokeWidth="2" />
            </svg>
        )
    }
    if (SvgName === "doller") {
        return (
            <svg width="11" height="17" viewBox="0 0 11 17" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
                <path d="M5.22 16.8C5.1 16.8 4.998 16.758 4.914 16.674C4.83 16.602 4.788 16.5 4.788 16.368V15.108C3.924 15.024 3.18 14.82 2.556 14.496C1.944 14.16 1.476 13.752 1.152 13.272C0.84 12.78 0.672 12.258 0.648 11.706C0.648 11.598 0.684 11.508 0.756 11.436C0.84 11.364 0.936 11.328 1.044 11.328H2.646C2.778 11.328 2.88 11.358 2.952 11.418C3.036 11.466 3.114 11.55 3.186 11.67C3.318 12.078 3.594 12.42 4.014 12.696C4.446 12.972 5.04 13.11 5.796 13.11C6.636 13.11 7.272 12.972 7.704 12.696C8.136 12.408 8.352 12.012 8.352 11.508C8.352 11.172 8.244 10.896 8.028 10.68C7.812 10.464 7.482 10.278 7.038 10.122C6.594 9.954 5.94 9.762 5.076 9.546C3.66 9.21 2.622 8.766 1.962 8.214C1.314 7.65 0.99 6.852 0.99 5.82C0.99 4.884 1.326 4.098 1.998 3.462C2.682 2.814 3.612 2.418 4.788 2.274V1.032C4.788 0.899999 4.83 0.797999 4.914 0.725999C4.998 0.642 5.1 0.6 5.22 0.6H6.318C6.438 0.6 6.54 0.642 6.624 0.725999C6.708 0.81 6.75 0.912 6.75 1.032V2.31C7.53 2.418 8.196 2.652 8.748 3.012C9.312 3.36 9.738 3.768 10.026 4.236C10.326 4.704 10.488 5.16 10.512 5.604C10.512 5.712 10.476 5.802 10.404 5.874C10.332 5.946 10.242 5.982 10.134 5.982H8.46C8.196 5.982 8.016 5.868 7.92 5.64C7.86 5.256 7.626 4.938 7.218 4.686C6.81 4.422 6.3 4.29 5.688 4.29C5.028 4.29 4.506 4.416 4.122 4.668C3.738 4.92 3.546 5.286 3.546 5.766C3.546 6.102 3.642 6.378 3.834 6.594C4.026 6.81 4.326 7.002 4.734 7.17C5.154 7.338 5.754 7.524 6.534 7.728C7.59 7.968 8.43 8.238 9.054 8.538C9.69 8.838 10.158 9.216 10.458 9.672C10.758 10.128 10.908 10.71 10.908 11.418C10.908 12.45 10.536 13.296 9.792 13.956C9.048 14.604 8.034 14.994 6.75 15.126V16.368C6.75 16.488 6.708 16.59 6.624 16.674C6.54 16.758 6.438 16.8 6.318 16.8H5.22Z" fill="inherit" />
            </svg>
        )
    }
    if (SvgName === "cross-white") {
        return (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L11 11M20 20L11 11M11 11L20 2L2 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
    if (SvgName === "chevron-left-blue") {
        return (
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2L2 7L7 12" stroke="#5C51E1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
    if (SvgName === "chevron-right-blue") {
        return (
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L7 7L2 12" stroke="#5C51E1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
    if (SvgName === "tick-white") {
        return (
            <svg width="35" height="27" viewBox="0 0 35 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 16.5L10.5 24L31.5 3" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
    if (SvgName === "trash-red") {
        return (
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 3C1.5 2.72386 1.72386 2.5 2 2.5H8C8.27614 2.5 8.5 2.72386 8.5 3V9C8.5 9.82843 7.82843 10.5 7 10.5H3C2.17157 10.5 1.5 9.82843 1.5 9V3Z" stroke="#E3556F" />
                <rect y="2" width="10" height="1" rx="0.5" fill="#E3556F" />
                <path d="M3 1C3 0.447715 3.44772 0 4 0H6C6.55228 0 7 0.447715 7 1H3Z" fill="#E3556F" />
            </svg>
        )
    }
    if (SvgName === "warn-board") {
        return (
            <svg width="41" height="45" viewBox="0 0 41 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.76 44H6C3.23857 44 1 41.7614 1 39V12C1 9.23858 3.23858 7 6 7H23.2547C24.5808 7 25.8526 7.52678 26.7903 8.46447L30.2955 11.9697C31.2332 12.9074 31.76 14.1792 31.76 15.5053V39C31.76 41.7614 29.5214 44 26.76 44Z" stroke="#5C51E1" strokeWidth="2" />
                <rect x="5.85094" y="19.65" width="18.72" height="0.78" rx="0.39" fill="#5C51E1" stroke="#5C51E1" strokeWidth="0.78" />
                <rect x="5.46094" y="13.8" width="9.36" height="2.34" rx="1.17" fill="#5C51E1" />
                <rect x="5.85094" y="22.77" width="14.82" height="0.78" rx="0.39" fill="#5C51E1" stroke="#5C51E1" strokeWidth="0.78" />
                <rect x="5.85094" y="32.13" width="18.72" height="0.78" rx="0.39" fill="#5C51E1" stroke="#5C51E1" strokeWidth="0.78" />
                <rect x="5.85094" y="35.25" width="14.82" height="0.78" rx="0.39" fill="#5C51E1" stroke="#5C51E1" strokeWidth="0.78" />
                <rect x="5.85094" y="25.89" width="17.16" height="0.78" rx="0.39" fill="#5C51E1" stroke="#5C51E1" strokeWidth="0.78" />
                <rect x="5.85094" y="29.01" width="11.7" height="0.78" rx="0.39" fill="#5C51E1" stroke="#5C51E1" strokeWidth="0.78" />
                <circle cx="31" cy="10" r="10" fill="#E3556F" />
                <path d="M29.1234 5.11043C29.0576 4.51807 29.5213 4 30.1173 4H31.8827C32.4787 4 32.9424 4.51807 32.8766 5.11043L32.0988 12.1104C32.0426 12.6169 31.6145 13 31.105 13H30.895C30.3855 13 29.9574 12.6169 29.9012 12.1104L29.1234 5.11043Z" fill="white" />
                <rect x="30" y="14" width="2" height="2" rx="1" fill="white" />
            </svg>
        )
    }
    if (SvgName === "board") {
        return (
            <svg width="33" height="39" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.76 38H6C3.23857 38 1 35.7614 1 33V6C1 3.23858 3.23858 1 6 1H23.2547C24.5808 1 25.8526 1.52678 26.7903 2.46447L30.2955 5.96975C31.2332 6.90743 31.76 8.1792 31.76 9.50528V33C31.76 35.7614 29.5214 38 26.76 38Z" stroke="#F6F5FE" strokeWidth="2" />
                <rect x="5.85094" y="13.65" width="18.72" height="0.78" rx="0.39" stroke="#F6F5FE" strokeWidth="0.78" />
                <path d="M6.5 9H14" stroke="#F6F5FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="5.85094" y="16.77" width="14.82" height="0.78" rx="0.39" stroke="#F6F5FE" strokeWidth="0.78" />
                <rect x="5.85094" y="26.13" width="18.72" height="0.78" rx="0.39" stroke="#F6F5FE" strokeWidth="0.78" />
                <rect x="5.85094" y="29.25" width="14.82" height="0.78" rx="0.39" stroke="#F6F5FE" strokeWidth="0.78" />
                <rect x="5.85094" y="19.89" width="17.16" height="0.78" rx="0.39" stroke="#F6F5FE" strokeWidth="0.78" />
                <rect x="5.85094" y="23.01" width="11.7" height="0.78" rx="0.39" stroke="#F6F5FE" strokeWidth="0.78" />
            </svg>
        )
    }
    if (SvgName === "doller-blue") {
        return (
            <svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                    <path d="M12.1367 1V41" stroke="#5C51E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.1891 8.27277H7.61025C5.92962 8.27277 4.31783 8.94322 3.12945 10.1366C1.94106 11.33 1.27344 12.9487 1.27344 14.6364C1.27344 16.3241 1.94106 17.9428 3.12945 19.1362C4.31783 20.3296 5.92962 21 7.61025 21H16.6628C18.3435 21 19.9553 21.6705 21.1436 22.8639C22.332 24.0573 22.9996 25.6759 22.9996 27.3637C22.9996 29.0514 22.332 30.67 21.1436 31.8634C19.9553 33.0569 18.3435 33.7273 16.6628 33.7273H1.27344" stroke="#5C51E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>
        )
    }
    if (SvgName === "doller-white") {
        return (
            <svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1367 1V41" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.1891 8.27277H7.61025C5.92962 8.27277 4.31783 8.94322 3.12945 10.1366C1.94106 11.33 1.27344 12.9487 1.27344 14.6364C1.27344 16.3241 1.94106 17.9428 3.12945 19.1362C4.31783 20.3296 5.92962 21 7.61025 21H16.6628C18.3435 21 19.9553 21.6705 21.1436 22.8639C22.332 24.0573 22.9996 25.6759 22.9996 27.3637C22.9996 29.0514 22.332 30.67 21.1436 31.8634C19.9553 33.0569 18.3435 33.7273 16.6628 33.7273H1.27344" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
    if (SvgName === "exclamation") {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#5C51E1" />
                <circle cx="12" cy="6" r="1" fill="white" />
                <rect x="11" y="9" width="2" height="10" rx="1" fill="white" />
            </svg>
        )
    }
    if (SvgName === "reload") {
        return (
            <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.0251 14L27.3544 15.3417L28.2552 15.792L29.013 15.1287L28.0251 14ZM4.52518 7.30126C4.11097 8.0187 4.35678 8.93609 5.07422 9.3503C5.79166 9.76451 6.70904 9.5187 7.12326 8.80126L4.52518 7.30126ZM24.9772 10.7993C24.2362 10.4289 23.3352 10.7293 22.9648 11.4703C22.5944 12.2113 22.8948 13.1123 23.6358 13.4827L24.9772 10.7993ZM31.9867 12.5262C32.6101 11.9806 32.6731 11.0329 32.1275 10.4095C31.582 9.78613 30.6343 9.72307 30.0109 10.2687L31.9867 12.5262ZM29.5251 14C29.5251 11.0507 28.552 8.18392 26.7566 5.84414L24.3765 7.67042C25.7699 9.48627 26.5251 11.7111 26.5251 14H29.5251ZM26.7566 5.84414C24.9612 3.50435 22.444 1.82237 19.5952 1.05905L18.8188 3.95683C21.0296 4.54922 22.9832 5.85457 24.3765 7.67042L26.7566 5.84414ZM19.5952 1.05905C16.7465 0.295732 13.7255 0.493739 11.0007 1.62236L12.1488 4.394C14.2634 3.5181 16.6079 3.36443 18.8188 3.95683L19.5952 1.05905ZM11.0007 1.62236C8.27599 2.75099 5.9998 4.74715 4.52518 7.30126L7.12326 8.80126C8.26767 6.81907 10.0342 5.2699 12.1488 4.394L11.0007 1.62236ZM28.6959 12.6583L24.9772 10.7993L23.6358 13.4827L27.3544 15.3417L28.6959 12.6583ZM29.013 15.1287L31.9867 12.5262L30.0109 10.2687L27.0372 12.8712L29.013 15.1287Z" fill="white" />
                <path d="M4.97291 14L5.64363 12.6583L4.74285 12.208L3.98502 12.8712L4.97291 14ZM28.4729 20.6987C28.8871 19.9812 28.6413 19.0639 27.9238 18.6496C27.2064 18.2354 26.289 18.4812 25.8748 19.1987L28.4729 20.6987ZM8.02084 17.2006C8.76183 17.5711 9.66282 17.2707 10.0332 16.5297C10.4037 15.7887 10.1033 14.8877 9.36228 14.5172L8.02084 17.2006ZM1.01136 15.4738C0.387969 16.0194 0.324904 16.967 0.870499 17.5904C1.41609 18.2138 2.36375 18.2769 2.98714 17.7313L1.01136 15.4738ZM3.47291 14C3.47291 16.9492 4.44607 19.816 6.24145 22.1558L8.62151 20.3295C7.22816 18.5137 6.47291 16.2888 6.47291 14L3.47291 14ZM6.24145 22.1558C8.03683 24.4956 10.5541 26.1776 13.4028 26.9409L14.1793 24.0431C11.9685 23.4507 10.0149 22.1454 8.62151 20.3295L6.24145 22.1558ZM13.4028 26.9409C16.2516 27.7042 19.2726 27.5062 21.9973 26.3776L20.8493 23.6059C18.7347 24.4818 16.3901 24.6355 14.1793 24.0431L13.4028 26.9409ZM21.9973 26.3776C24.7221 25.249 26.9982 23.2528 28.4729 20.6987L25.8748 19.1987C24.7304 21.1809 22.9639 22.73 20.8493 23.6059L21.9973 26.3776ZM4.30219 15.3416L8.02084 17.2006L9.36228 14.5172L5.64363 12.6583L4.30219 15.3416ZM3.98502 12.8712L1.01136 15.4738L2.98714 17.7313L5.9608 15.1287L3.98502 12.8712Z" fill="white" />
            </svg>
        )
    }
    if (SvgName === "plus-circle") {
        return (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8" stroke="#5C51E1" strokeWidth="2" />
                <path d="M9 6V9M9 12V9M9 9H6H12" stroke="#5C51E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
    else { return (<div>Check your spell</div>) }
}

export default Svg

