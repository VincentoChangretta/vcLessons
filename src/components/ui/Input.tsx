
export interface InputProps {
  name: string,
  type: string,
  placeholder: string,
  labelText?: string,
  classname?: string
}

export const Input = (props: InputProps) => {
  return (
    <label className="max-w-[400px] w-full">
      <p className="mb-[10px] text-center">{props.labelText}</p>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.classname} w-full p-[15px] pl-[25px] rounded-standartRadius text-primaryColor`}
      />
    </label>
  );
}
