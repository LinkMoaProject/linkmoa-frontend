import {
  ComponentType,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";
/**
 * compose function: A utility for composing Higher-Order Components (HOCs).
 * 
 * It takes a list of HOCs and applies them in a right-to-left order, 
 * returning a new component with all the HOCs applied.
 * 
 * @param hocs - An array of functions (HOCs) that each take a component 
 *               and return a new wrapped component with added functionality.
 * 
 * @returns A function that takes a component and applies all the provided 
 *          HOCs in reverse order to it.
 * 
 * Usage Example:   
 * const enhancedComponent = compose(withAuth, withRouter)(MyComponent);   
 * withAuth(withRouter(MyComponent))   
 * Source: Adapted from `realworld-react-fsd`.
 */
export function compose<Props extends object>(
  ...hocs: Array<(component: ComponentType<Props>) => ComponentType<Props>>
): (component: ComponentType<Props>) => ComponentType<Props> {
  return (component: ComponentType<Props>) =>
    hocs.reduceRight((wrapped, hoc) => hoc(wrapped), component)
}

// TODO: change to React 19 later
// export function compose<Props extends object>(
//   ...hocs: Array<(component: ComponentType<Props>) => ComponentType<Props>>
// ): (
//   component: ComponentType<Props>,
// ) => ForwardRefExoticComponent<PropsWithoutRef<Props> & RefAttributes<any>> {
//   return (component: ComponentType<Props>) => {
//     const WrappedComponent = forwardRef<Props, Props>(
//       (props, ref: ForwardedRef<Props>) => {
//         const ComposedComponent = hocs.reduceRight(
//           (wrapped, hoc) => hoc(wrapped),
//           component,
//         )

//         return (
//           <ComposedComponent
//             {...props}
//             ref={ref}
//           />
//         )
//       },
//     )

//     WrappedComponent.displayName = `Composed(${component.displayName || component.name || 'Component'})`

//     return WrappedComponent
//   }
// }
