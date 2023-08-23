import { forwardRef, ForwardedRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export const Input = forwardRef(
  ({ label, error, ...rest }: CustomInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div>
        <label>
          {label}
          <input className='focus:outline-brand-brand-1' type="text" ref={ref} {...rest} />
          {error?.message}
        </label>
      </div>
    );
  }
);