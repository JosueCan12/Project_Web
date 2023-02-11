import { Link } from "react-router-dom";

function NavOption({
  route,
  disableLink = false,
  handleClick = () => {},
  title,
  imgURL,
  open = true,
}) {
  return disableLink ? (
    <div
      className={`flex rounded-md ${
        open ? "p-4 " : "p-3 justify-center"
      } hover:bg-gray-100 hover:text-blue gap-x-4 
        "mt-5" `}
    >
      <div className="flex">
        {imgURL ? (
          <img src={`./src/assets/${imgURL}.png`} style={{ width: 25 }} />
        ) : null}

        <span
          className={`${
            !open && "hidden"
          }  origin-left duration-200 font-bold px-5`}
        >
          {title}
        </span>
      </div>
    </div>
  ) : (
    <div className="hover:bg-gray-100 hover:text-blue rounded-md">
      <Link to={route} className="flex" onClick={handleClick}>
        <div
          className={`flex ${
            open ? "p-4 " : "p-3 justify-center"
          } gap-x-4 
        "mt-5" `}
        >
          {imgURL ? (
            <img src={`./src/assets/${imgURL}.png`} style={{ width: 25 }} />
          ) : null}

          <span
            className={`${
              !open && "hidden"
            }  origin-left duration-200 font-bold px-5`}
          >
            {title}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default NavOption;
