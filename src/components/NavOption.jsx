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
      className="rounded-md hover:bg-purple-200 px-4 py-2 hover:text-purple-800 gap-x-4 hover:cursor-pointer"
    >
      <div className="flex">
        {imgURL ? (
          <img src={`./src/assets/${imgURL}.png`} style={{ width: 25 }} />
        ) : null}

        <span className=" font-bold px-5">{title}</span>
      </div>
    </div>
  ) : (
    <div
      className="hover:bg-purple-200 block hover:text-purple-800 rounded-md"
    >
      <Link to={route} className="flex px-4 py-2" onClick={handleClick}>
        <div className="flex">
          {imgURL ? (
            <img src={`./src/assets/${imgURL}.png`} style={{ width: 25 }} />
          ) : null}

          <span className="origin-left duration-200 font-bold px-5">
            {title}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default NavOption;
