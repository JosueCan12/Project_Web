import React from "react";
import { authContext } from "../context/authContext";
function TableUsers({ openModal }) {
/*  const { showWorkers } = useContext(authContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await showWorkers();
      if (res && res.data && res.data.worker && res.data.worker.docs) {
        setUsers(res.data.worker.docs);
      }
    }
     fetchData();
  }, [showWorkers]); */
 
  return (
    <section className="antialiased ">
      <div className="flex flex-col justify-center h-full justify-items-center">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-2xl rounded-sm border border-gray-200 ">
          <header className="px-5 py-4 border-b border-gray-100 flex bg-[#03254e]">
            <h2 className="font-bold text-white">Lista de Usuarios</h2>
            <div className="flex ml-auto">
              <button
                className="bg-pink-500 py-1 font-bold  text-white rounded-md px-4 shadow-2xl"
                onClick={() => openModal(true)}
              >
                Añadir
              </button>
            </div>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Nombre</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Contraseña</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Rol</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Acciones</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
              {/*   {users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableUsers;
