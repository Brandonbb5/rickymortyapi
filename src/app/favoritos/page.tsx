const FavoritosPage = () => {
    return(
    <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Tus Favoritos</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
                src="/ruta-a-imagen.jpg"
                alt="Nombre del personaje"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="font-semibold text-lg mb-1">Nombre del personaje</h2>
                <p className="text-gray-500 text-sm">Especie - Estado</p>
            </div>
            </div>

        </div>
    </div>
    )
}
export default FavoritosPage;