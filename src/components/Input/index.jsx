import React from 'react'

const Input = ({label, ...props})=> {
    return(
        <div className="py-4">
          <span className="mb-2 text-sm font-normal border font-openSans">
            {label}
          </span>
          <input
            className="w-full h-[50px] p-2 mt-3 bg-white border rounded-md placeholder:font-light placeholder:text-Grey2 active:border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-Grey2 border-Input"
            {...props}
            // type={type}
            // name={name}
            // id={id}
            // placeholder={placeholder}
            // onChange={(e) => onChangeInput(e)}
          />
        </div>
    )
}

export default Input