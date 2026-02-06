export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <span className='bg-sky-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>

      <p className='text-gray-500 text-lg'>Cargando...</p>
    </div>
  );
}
