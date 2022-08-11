 export default class Dropdown {
      constructor(el, initalValues, values) {
        this.el = el;
        this.values = values;
        this.initalValues = initalValues;

        this.dropdownHolder = document.querySelector(`.${el}`);
        this.dropdown = document.createElement("ul");
        this.dropdownValueElement = document.createElement("span");
        this.dropdownIsOpen = false;
        this.dropdown.style.opacity = "0";
        this.style({ dropdown: this.dropdown, holder: this.dropdownHolder });
        this.setDropdownHolder();
      }

      // setting initial value, creating dropdown inside and handle click
      setDropdownHolder = () => {
        this.dropdownValueElement.innerText = this.initalValues;
        this.dropdownHolder.append(this.dropdownValueElement);
        let wrapper = this.dropdownHolder.closest(".wrapper");

        wrapper.append(this.createDropdown());
        this.dropdownHolder.addEventListener("click", (ev) => {
          this.toggleActive();
        });
      };

      style = ({ dropdown, holder }) => {
        holder.style.position = "relative";
        holder.style.cursor = "pointer";
        dropdown.style.padding = "0px";
        dropdown.style.position = "absolute";
        dropdown.style.left = "0";
        dropdown.style.top = "25px";
      };

      // toggle active class
      toggleActive = () => {
        console.log("syta");
        this.dropdownIsOpen = !this.dropdownIsOpen;
        this.dropdown.style.opacity = this.dropdownIsOpen ? "1" : "0";
      };

      // creating dropdown
      createDropdown = () => {
        this.values.forEach((val) => {
          let li = document.createElement("li");
          li.innerText = val;
          this.dropdown.append(li);
          li.addEventListener("click", (ev) => {
            console.log(ev.target);
            this.toggleActive();
            this.dropdownValueElement.innerText = ev.currentTarget.innerText;
          });
        });
        return this.dropdown;
      };
    }
