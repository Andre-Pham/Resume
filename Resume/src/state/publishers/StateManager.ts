import ResColors from "../../components/styling/ResColors";
import ResValuePublisher from "./impl/ResValuePublisher";
import { ActiveSection } from "./types/ActiveSection";

/**
 * Stores application-level state to avoid having to pass state to different components, and reduces component coupling. Uses the publisher-subscriber pattern.
 * 
 * To define value-less state, statically instantiate a ResPublisher.
 * ``` public static readonly myState = new ResPublisher(); ```
 * To publish to that state, call the publish method. This would be done in a component.
 * ``` StateManager.myState.publish(); ```
 * Any component can subscribe. Every time the state is published, a callback is called.
 * ```
 * StateManager.myState.subscribe(() => {
 *     // React to the state change, e.g. update hooks or call forceUpdate()
 * });
 * ```
 * 
 * To define a state with value, statically instantiate a ResValuePublisher.
 * ``` public static readonly loginStatus = new ResValuePublisher(LoginStatus.loggedOut); ```
 * To publish to that state, a value must be passed to the publish method. This would be done in a component.
 * ``` StateManager.loginStatus.publish(LoginStatus.worker); ```
 * Any component can subscribe. Every time the state is published, a callback is called.
 * ```
 * StateManager.loginStatus.subscribe(() => {
 *     // We can read the state value
 *     let stateValue: LoginStatus = StateManager.loginStatus.read();
 * 
 *     // React to the state change, e.g. update hooks or call forceUpdate()
 * });
 * ```
 */
class StateManager {

    public static readonly activeSection = new ResValuePublisher(ActiveSection.none);

    public static readonly contentWidth = new ResValuePublisher(0.0);

    public static readonly backgroundColor = new ResValuePublisher(ResColors.background.getColor());

}

export default StateManager;