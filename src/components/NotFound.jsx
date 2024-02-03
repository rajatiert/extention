const DataNotFound = () => {
    return <div className="w-full h-[80vh] border-[1px] border-t-0 border-[#CFCFCF] flex flex-col  justify-center items-center text-sm text-zing-gray-500">
        <div className=" " ><svg xmlns="http://www.w3.org/2000/svg" width="180" height="136" viewBox="0 0 180 136" fill="none">
            <circle cx="90" cy="64" r="64" fill="#FDE7DB" />
            <circle cx="24" cy="20" r="6" fill="#FDE7DB" />
            <circle cx="21" cy="112" r="8" fill="#FDE7DB" />
            <circle cx="164" cy="36" r="8" fill="#FDE7DB" />
            <circle cx="153" cy="9" r="5" fill="#FDE7DB" />
            <g filter="url(#filter0_dd_529_2613)">
                <path fillRule="evenodd" clip-rule="evenodd" d="M92 16C78.534 16 66.6222 22.6541 59.3733 32.8536C57.0062 32.2954 54.5376 32 52 32C34.3269 32 20 46.3269 20 64C20 81.6731 34.3269 96 52 96H132C147.464 96 160 83.464 160 68C160 52.536 147.464 40 132 40C130.902 40 129.818 40.0633 128.752 40.1863C122.623 25.9596 108.475 16 92 16Z" fill="#F9F5FF" />
                <circle cx="52" cy="64" r="32" fill="url(#paint0_linear_529_2613)" />
                <circle cx="92" cy="56" r="40" fill="url(#paint1_linear_529_2613)" />
                <circle cx="132" cy="68" r="28" fill="url(#paint2_linear_529_2613)" />
            </g>
            <g filter="url(#filter1_b_529_2613)">
                <rect x="62" y="60" width="56" height="56" rx="28" fill="#F36C21" fill-opacity="0.4" />
                <path d="M100.5 98.5L95.425 93.425M98.1667 86.8333C98.1667 91.988 93.988 96.1667 88.8333 96.1667C83.6787 96.1667 79.5 91.988 79.5 86.8333C79.5 81.6787 83.6787 77.5 88.8333 77.5C93.988 77.5 98.1667 81.6787 98.1667 86.8333Z" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <filter id="filter0_dd_529_2613" x="0" y="16" width="180" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_529_2613" />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.04 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_529_2613" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect2_dropShadow_529_2613" />
                    <feOffset dy="20" />
                    <feGaussianBlur stdDeviation="12" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_529_2613" result="effect2_dropShadow_529_2613" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_529_2613" result="shape" />
                </filter>
                <filter id="filter1_b_529_2613" x="54" y="52" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_529_2613" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_529_2613" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_529_2613" x1="27.4286" y1="42.8571" x2="84" y2="96" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F36C21" stopOpacity="0.45" />
                    <stop offset="0.245356" stop-color="#FF8502" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_529_2613" x1="61.2857" y1="29.5714" x2="132" y2="95.9999" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F36C21" stopOpacity="0.45" />
                    <stop offset="0.245356" stop-color="#FF8502" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_529_2613" x1="110.5" y1="49.5" x2="160" y2="96" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F36C21" stopOpacity="0.45" />
                    <stop offset="0.245356" stop-color="#FF8502" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg></div>
        <div> There might be no information or Try refining your search </div>
    </div>
}

export default DataNotFound