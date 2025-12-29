import * as React from "react";

type DXSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
};

const DXSelect: React.FC<DXSelectProps> = ({ label, children, ...props }) => {
  return (
    <label>
      {label ? <span>{label}</span> : null}
      <select {...props}>{children}</select>
    </label>
  );
};

export default DXSelect;
