import { getcategory, getrole } from "@/service";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

export interface IModalProps {}

export function Modal({ check, toggle }: { check: boolean; toggle: any }) {
  const [category, setcategory]: any = React.useState([]);
  const [role, setrole] = React.useState(0);
  const [categoryname, setcategoryname] = React.useState("");
  const getall = async () => {
    let category = await getcategory();
    let role = await getrole();
    if (category && role) {
      setcategory(category.data);
    }
  };
  React.useEffect(() => {
    getall();
  }, []);

  const handlemouseenter = (id: number, name: string) => {
    setrole(id);
    setcategoryname(name);
  };
  let history = useRouter();

  const handlerole = (id: number, name: string) => {
    history.push(`../productcategory/${categoryname}/${id}/${name}?page=1`);
    toggle();
  };
  return (
    <div>
      <div className={`cart ${check ? "visible" : "hidden"}`}>
        {category &&
          category.length &&
          category.map(
            (
              item: { id: number; icon: string; categoryname: string; all: [] },
              index: number
            ) => {
              return (
                <Link
                  onClick={toggle}
                  href={`/${item.categoryname}/${item.id}?page=1`}>
                  <ul key={index} className='ulcss'>
                    <li
                      onMouseEnter={() =>
                        handlemouseenter(index, item.categoryname)
                      }>
                      <i className={item.icon}></i>
                      {item.categoryname}
                      {item.all.length > 0 ? (
                        <i
                          style={{
                            float: "right",
                            marginTop: "5px",
                          }}
                          className='fa-solid fa-angle-right'></i>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </Link>
              );
            }
          )}
        <ul className='ulcss'>
          <li style={{ marginLeft: " 31px" }}>Deal hot</li>
          <li style={{ marginLeft: " 31px", marginBottom: "13px" }}>
            Deal theo khung giờ
          </li>
        </ul>

        <div
          className=''
          style={{
            background: "orange",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "69px",
          }}>
          <div className='icon'>
            <i className='fa-solid fa-phone-volume'></i>
          </div>
          <div className='contact'>
            <h5>Hotline liên hệ</h5>
            <p>0325668050</p>
          </div>
        </div>
        {category && category.length && category[role].all.length === 0 ? (
          ""
        ) : (
          <div className='hover'>
            {category &&
              category[role] &&
              category[role].all.map(
                (
                  item: {
                    id: number;
                    Rolename: string;
                    categoryid: string;
                  },
                  index: number
                ) => {
                  return (
                    <ul
                      key={index}
                      onClick={() => handlerole(item.id, item.Rolename)}
                      className='ulcss1'>
                      <li>{item.Rolename}</li>
                    </ul>
                  );
                }
              )}
          </div>
        )}
      </div>
    </div>
  );
}
