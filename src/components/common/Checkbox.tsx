
export interface TypeParamsCheckBox {
  classCheckBox: string;
  classLabel: string;
  label: string;
  checked?: boolean;
  onChange?: (val: boolean) => void;
}

export default function CheckBox({
  checked = false,
  classCheckBox,
  classLabel,
  label,
  onChange = () => {},
}: TypeParamsCheckBox) {
  return (
    <>
      <label className={classCheckBox}>
        <input type="checkbox" defaultChecked={checked} onChange={(e) => { onChange(e.currentTarget.checked)}} />
        <span className="checkmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="checked-ico"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
        <span className={classLabel}>{label}</span>
      </label>
    </>
  );
}
