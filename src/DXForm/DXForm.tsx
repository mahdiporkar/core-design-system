import * as React from "react";

type DXFormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  title?: string;
};

const DXForm: React.FC<DXFormProps> = ({ title, children, ...props }) => {
  return (
    <form {...props}>
      {title ? <h2>{title}</h2> : null}
      {children}
    </form>
  );
};

export default DXForm;
