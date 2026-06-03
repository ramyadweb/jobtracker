function StatusCard({title,count}) {
    return(
        <div className="bg-white shadow-md rounded-xl text-center p-6 w-50">
            <h4 className="text-lg font-semibold text-gray-700">
                {title}
            </h4>

            <p className="mt-3 text-3xl font-bold text-blue-600">
                {count}
            </p>
            
        </div>
    );
}

export default StatusCard;