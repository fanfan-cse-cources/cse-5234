import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Dragon's Wok</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">About US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/purchase">Purchase</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/purchase/viewOrder">View Orders</a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>

  );
}
