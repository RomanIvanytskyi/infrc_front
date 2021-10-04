import Home from "../Pages/Library";
import Page from "../Pages/Info";
import paths from "./paths";
import { Route } from "react-router-dom";
import NewProduct from "../Pages/NewProduct";
import Layout from "./Layout";
import OneProduct from "../Pages/OneProduct";
import ProductEdit from "../Pages/Edit";

const AppRouters = [
  {
    path: paths.home,
    Component: Home,
    exact: true,
  },
  {
    path: paths.page,
    Component: Page,
    exact: true,
  },
  {
    path: paths.NewProduct,
    Component: NewProduct,
    exact: true,
  },
  {
    path: paths.OneProduct,
    Component: OneProduct,
    exact: false,
  },
  {
    path: paths.ProductEdit,
    Component: ProductEdit,
    exact: false,
  },
];

const RootRouter = (props) => {
  return (
    <div>
      <Layout>
        {AppRouters.map(({ path, Component, exact }) => (
          <Route key={path} exact={exact} path={path}>
            <Component />
          </Route>
        ))}
      </Layout>
    </div>
  );
};

export default RootRouter;
