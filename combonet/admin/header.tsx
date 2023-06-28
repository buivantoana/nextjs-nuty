import { getcategory } from "@/service";
import axios from "../../axios/axios";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import useSWR from "swr";

export default function AccountMenu() {
  let router: any = useRouter();

  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-lg  bg-primary' data-bs-theme='dark'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link
                  className={
                    router &&
                    router.query.slug &&
                    router.query.slug[1] === "csd"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  aria-current='page'
                  href='/admin/Chăm sóc da/csd'>
                  Chăm sóc da
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    router &&
                    router.query.slug &&
                    router.query.slug[1] === "csct"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href='/admin/Chăm sóc cơ thể/csct'>
                  Chăm sóc cơ thể
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    router && router.query.slug && router.query.slug[1] === "tđ"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href='/admin/Trang điểm/tđ'>
                  Trang điểm
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    router &&
                    router.query.slug &&
                    router.query.slug[1] === "cstvdđ"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href='/admin/Chăm sóc tóc và da đầu/cstvdđ'>
                  Chăm sóc tóc và da đầu
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    router &&
                    router.query.slug &&
                    router.query.slug[1] === "tpc"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href='/admin/Thực phẩm chức năng/tpc'>
                  Thực phẩm chức năng
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    router && router.query.slug && router.query.slug[1] === "nh"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href='/admin/ Nước hoa/nh'>
                  Nước hoa
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    router &&
                    router.query.slug &&
                    router.query.slug[1] === "pklđ"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href='/admin/Phụ kiện làm đẹp/pklđ'>
                  Phụ kiện làm đẹp
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Role
                </Link>
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item' href='/admin/category'>
                      Category
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='/admin/role'>
                      Role
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='/admin/brand'>
                      Brand
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='/admin/present'>
                      Present
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  DetailIMG
                </Link>
                <ul className='dropdown-menu'>
                  <li className='nav-item'>
                    <Link
                      aria-current='page'
                      href='/admin/detailimg/Chăm sóc da/csd'>
                      Chăm sóc da
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/admin/detailimg/Chăm sóc cơ thể/csct'>
                      Chăm sóc cơ thể
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/admin/detailimg/Trang điểm/td'>
                      Trang điểm
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/admin/detailimg/Chăm sóc tóc và da đầu/cstvdd'>
                      Chăm sóc tóc và da đầu
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/admin/detailimg/Thực phẩm chức/tpcn'>
                      Thực phẩm chức năng
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/admin/detailimg/ Nước hoa/nh'>Nước hoa</Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/admin/detailimg/Phụ kiện làm đẹp/pkld'>
                      Phụ kiện làm đẹp
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  DetailDES
                </Link>
                <ul className='dropdown-menu'>
                  <li className='nav-item'>
                    <Link
                      aria-current='page'
                      href='/admin/detaildes/Chăm sóc da/csd'>
                      Chăm sóc da
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/admin/detaildes/Chăm sóc cơ thể/csct'>
                      Chăm sóc cơ thể
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/admin/detaildes/Trang điểm/td'>
                      Trang điểm
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/admin/detaildes/Chăm sóc tóc và da đầu/cstvdd'>
                      Chăm sóc tóc và da đầu
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/admin/detaildes/Thực phẩm chức/tpcn'>
                      Thực phẩm chức năng
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/admin/detaildes/ Nước hoa/nh'>Nước hoa</Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/admin/detaildes/Phụ kiện làm đẹp/pkld'>
                      Phụ kiện làm đẹp
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Magazile
                </Link>
                <ul className='dropdown-menu'>
                  <li className='nav-item'>
                    <Link aria-current='page' href='/admin/categorymagazile'>
                      CategoryMagazile
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/admin/magazile'>Post Magazile</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
