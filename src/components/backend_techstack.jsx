import React from 'react'

const backend_techstack = () => {
    return (
        <div className="flex flex-wrap gap-3">
            <div
                className="group hover:bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/30 rounded-full p-3 hover:border-orange-400/60  transition-all duration-300"
            >
                <div className="flex items-center justify-center gap-2">
<svg className=" w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#599636" d="m50.146.273 2.668 5.012c.6.925 1.25 1.744 2.016 2.506a70 70 0 0 1 6.262 7.08c4.521 5.938 7.57 12.531 9.749 19.662 1.306 4.356 2.015 8.824 2.069 13.343.218 13.508-4.413 25.107-13.75 34.747a40 40 0 0 1-4.905 4.194c-.925 0-1.363-.71-1.744-1.363a11.2 11.2 0 0 1-1.362-3.921c-.328-1.635-.544-3.269-.438-4.956v-.763c-.075-.162-.89-75.157-.566-75.541"/><path fill="#6CAC48" d="M50.146.108c-.11-.22-.22-.054-.329.053.053 1.093-.328 2.068-.925 3-.656.924-1.524 1.634-2.396 2.396-4.844 4.194-8.656 9.259-11.709 14.924-4.062 7.624-6.156 15.796-6.75 24.398-.271 3.103.982 14.052 1.96 17.211 2.669 8.387 7.462 15.415 13.67 21.515 1.526 1.468 3.157 2.83 4.844 4.14.49 0 .544-.438.656-.763a15 15 0 0 0 .491-2.124l1.094-8.169z"/><path fill="#C2BFBF" d="M52.814 90.135c.11-1.25.71-2.287 1.362-3.321-.656-.272-1.143-.813-1.524-1.416-.33-.57-.601-1.173-.813-1.797-.762-2.287-.925-4.687-1.143-7.024V75.16c-.272.22-.329 2.069-.329 2.344a54 54 0 0 1-.98 7.353c-.163.98-.273 1.959-.876 2.83 0 .11 0 .22.053.382.981 2.887 1.25 5.827 1.416 8.824v1.094c0 1.306-.053 1.03 1.031 1.468.438.163.925.22 1.362.544.329 0 .382-.272.382-.49l-.163-1.797V92.7c-.053-.875.11-1.744.219-2.563z"/></svg>                    <span className="text-gray-200 inter font-medium group-hover:text-orange-300">
                        MongoDB
                    </span>
                </div>
            </div>

            <div
                className="group hover:bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/30 rounded-full p-3 hover:border-orange-400/60  transition-all duration-300"
            >
                <div className="flex items-center justify-center gap-2">
                    <svg className=" w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#00618A" d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z" /></svg>
                    <span className="text-gray-200 inter font-medium group-hover:text-orange-300">
                        MySQL
                    </span>
                </div>
            </div>

            <div
                className="group hover:bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/30 rounded-full p-3 hover:border-orange-400/60  transition-all duration-300"
            >
                <div className="flex items-center justify-center gap-2">
                    <svg className=" w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <g id="Ð¡Ð»Ð¾Ð¹_1"><linearGradient id="SVGID_1__sH0rW2TvYdr9_gr1" x1="14.073" x2="14.073" y1="8.468" y2="36.033" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7dffce"></stop><stop offset="1" stopColor="#50c08d"></stop></linearGradient><path fill="url(#SVGID_1__sH0rW2TvYdr9_gr1)" d="M24.2,30V6.3c0-1.8-2.3-2.6-3.4-1.2L4.5,25.9c-1.3,1.7-0.1,4.1,2,4.1H24.2z"></path><linearGradient id="SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2" x1="34.249" x2="34.249" y1="48.404" y2="19.425" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7dffce"></stop><stop offset="1" stopColor="#50c08d"></stop></linearGradient><path fill="url(#SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2)" d="M24,18.4v23.7c0,1.8,2.4,2.6,3.5,1.2 l16.4-20.7c1.3-1.7,0.1-4.1-2.1-4.1H24z"></path></g>
                    </svg>                    <span className="text-gray-200 inter font-medium group-hover:text-orange-300">
                        Supabase
                    </span>
                </div>
            </div>

            <div
                className="group hover:bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/30 rounded-full p-3 hover:border-orange-400/60  transition-all duration-300"
            >
                <div className="flex items-center justify-center gap-2">
                    <svg className=" w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z" /></svg>                    <span className="text-gray-200 inter font-medium group-hover:text-orange-300">
                        Node.js
                    </span>
                </div>
            </div>

            <div
                className="group hover:bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/30 rounded-full p-3 hover:border-orange-400/60  transition-all duration-300"
            >
                <div className="flex items-center justify-center gap-2">
                    <svg className=" w-6 h-6 invert text-orange-400 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
                    </svg>                    <span className="text-gray-200 inter font-medium group-hover:text-orange-300">
                        Express.js
                    </span>
                </div>
            </div>
        </div>
    )
}
//                                             { name: 'Express.js', icon: 'expressjs' }

export default backend_techstack
