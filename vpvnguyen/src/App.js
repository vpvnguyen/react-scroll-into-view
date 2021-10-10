import React from "react";
import "./App.css";

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const InputText = ({ name }) => {
  return (
    <div className="border">
      <label htmlFor={name}>{name}</label>
      <input placeholder={name} type="text" name={name} id={name} />
    </div>
  );
};

// (function (a, b) {
//   if (
//     /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
//       a
//     ) ||
//     /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
//       a.substr(0, 4)
//     )
//   )
//     window.location = b;
// })(
//   navigator.userAgent || navigator.vendor || window.opera,
//   "http://detectmobilebrowser.com/mobile"
// );

const ScrollIntoViewOnFocus = ({
  children,
  behavior = "auto", // smooth
  block = "center",
  inline = "nearest", // center
}) => {
  const ref = React.useRef(null);

  console.log(window.navigator.userAgent);

  return (
    <div
      style={{ border: "1px solid red" }}
      ref={ref}
      onFocus={(e) => {
        ref.current.scrollIntoView(behavior, block, inline);
        // window.scrollTo({
        //   top: 100,
        //   left: 100,
        //   behavior: "smooth",
        // });
      }}
    >
      {children}
    </div>
  );
};

function App() {
  const telRef = React.useRef(null);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="border">
        <label htmlFor="text">text</label>
        <input placeholder="text" type="text" name="text" id="text" />
      </div>
      <div className="border">
        <label htmlFor="checkbox">checkbox</label>
        <input
          placeholder="checkbox"
          type="checkbox"
          name="checkbox"
          id="checkbox"
        />
      </div>
      <div className="border">
        <label htmlFor="color">color</label>
        <input placeholder="color" type="color" name="color" id="color" />
      </div>
      <div className="border">
        <label htmlFor="date">date</label>
        <input placeholder="date" type="date" name="date" id="date" />
      </div>
      <div className="border">
        <label htmlFor="email">email</label>
        <input placeholder="email" type="email" name="email" id="email" />
      </div>
      <div className="border">
        <label htmlFor="file">file</label>
        <input placeholder="file" type="file" name="file" id="file" />
      </div>
      <div className="border">
        <label htmlFor="image">image</label>
        <input placeholder="image" type="image" src="./logo.svg" alt="logo" />
      </div>
      <div className="border">
        <label htmlFor="month">month</label>
        <input placeholder="month" type="month" name="month" id="month" />
      </div>
      <div className="border">
        <label htmlFor="number">number</label>
        <input placeholder="number" type="number" name="number" id="number" />
      </div>
      <div className="border">
        <label htmlFor="password">password</label>
        <input
          placeholder="password"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div className="border">
        <label htmlFor="radio">radio</label>
        <input placeholder="radio" type="radio" name="radio" id="radio" />
      </div>
      <div className="border">
        <label htmlFor="range">range</label>
        <input placeholder="range" type="range" name="range" id="range" />
      </div>
      <div className="border">
        <label htmlFor="reset">reset</label>
        <input placeholder="reset" type="reset" value="reset" />
      </div>
      <div className="border">
        <label htmlFor="tel">tel</label>
        <input
          placeholder="tel"
          type="tel"
          name="tel"
          id="tel"
          onFocus={(e) => {
            console.log("Focused on input", e.target);
            console.log("telRef", telRef);
            telRef.current.scrollIntoView({
              behavior: "auto",
              block: "center",
              inline: "center",
            });
          }}
          ref={telRef}
        />
      </div>
      <div className="border">
        <label htmlFor="time">time</label>
        <input placeholder="time" type="time" name="time" id="time" />
      </div>
      <div className="border">
        <label htmlFor="url">url</label>
        <input placeholder="url" type="url" name="url" id="url" />
      </div>
      <div className="border">
        <label htmlFor="week">week</label>
        <input placeholder="week" type="week" name="week" id="week" />
      </div>
      {arr.map((item, index) => (
        <ScrollIntoViewOnFocus behavior="smooth">
          <InputText name={`text-${index}`} />
        </ScrollIntoViewOnFocus>
      ))}
    </div>
  );
}

export default App;
