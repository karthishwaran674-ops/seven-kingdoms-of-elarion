import { forwardRef } from 'react';

const variants = {
  primary: 'border border-cyan-400/40 bg-cyan-400/15 text-cyan-100 hover:bg-cyan-400/25',
  secondary: 'border border-white/15 bg-white/10 text-slate-100 hover:bg-white/20',
  ghost: 'border border-white/10 bg-transparent text-slate-300 hover:bg-white/10',
};

const Button = forwardRef(function Button(
  { children, variant = 'primary', className = '', as: Component = 'button', ...props },
  ref
) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-200 hover:scale-[1.02]';

  return (
    <Component
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Button;
