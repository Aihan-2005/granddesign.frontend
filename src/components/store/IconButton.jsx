


function IconButton({icon,ariaLabel }){

    return(
        <button
        aria-label={ariaLabel}
        className="text-gray-600 hover:text-black transition">
            {icon}
        </button>
    );
}

