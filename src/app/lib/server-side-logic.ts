// lib/server-side-logic.js
export async function getServerSideProps(context: any) {
  // Logika sisi server, misalnya mengambil data dari API atau database
  const dataFromServer = 'Data ini diambil dari server-side logic';

  // Kirim data sebagai prop ke halaman
  return {
    props: {
      serverData: dataFromServer,
    },
  };
}
