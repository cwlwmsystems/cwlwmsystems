/** A static portfolio representation of the actual Cwlwm Field Operations brand splash.
 *  Uses the source project's real logo and styling; this is not a dashboard screenshot.
 */
export function FieldOperationsSplash() {
  return (
    <div className="field-splash" role="img" aria-label="Cwlwm Systems Field Intelligence branded splash screen with red and green Celtic knot logo and loading indicator">
      <div className="field-splash-watermark field-splash-watermark-a" aria-hidden="true" />
      <div className="field-splash-watermark field-splash-watermark-b" aria-hidden="true" />
      <div className="field-splash-content" aria-hidden="true">
        <div className="field-splash-brand" />
        <span className="field-splash-product">FIELD INTELLIGENCE</span>
        <div className="field-splash-progress"><span /></div>
        <span className="field-splash-label">LOADING...</span>
      </div>
    </div>
  );
}
