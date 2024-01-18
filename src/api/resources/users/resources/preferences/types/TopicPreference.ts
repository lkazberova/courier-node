/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Courier from "../../../../..";

export interface TopicPreference {
    /** The Channels a user has chosen to receive notifications through for this topic */
    custom_routing?: Courier.ChannelClassification[];
    default_status: Courier.PreferenceStatus;
    has_custom_routing?: boolean;
    status: Courier.PreferenceStatus;
    topic_id: string;
    topic_name: string;
}
