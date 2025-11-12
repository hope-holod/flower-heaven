// import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./routes/AppRoutes";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen flex flex-col">
//         <main className="flex-1">
//           <AppRoutes />
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

export default function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <AppRoutes /> 
        </main>
      </div>
    </BrowserRouter>
  );
}

