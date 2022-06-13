/** @odoo-module **/

import { registry } from "@web/core/registry";

const webNotifyService = {
    dependencies: ["notification", "action"],
    start(env, { notification, action }) {
        var _types = ["notify_success",
                      "notify_warning",
                      "notify_info",
                      "notify_danger",
                      "notify_default"];
        env.bus.on("WEB_CLIENT_READY", null, async () => {
            const legacyEnv = owl.Component.env;
            legacyEnv.services.bus_service.onNotification(this, (notifications) => {
                for (const { payload, type } of notifications) {
                    if (_types.indexOf(type) != -1) {
                        notification.add(payload.message, {
                            title: payload.type,
                            sticky: payload.sticky,
                            onClose: function() {
                                console.log("close notification");
                            },
                            buttons: [{
                                name: "buttons",
                                onClick: function() {
                                    console.log("click buttons");
                                    action.doAction("base.action_res_users");
                                },
                                primary: true
                            }]
                        });

                    }
                }
            });
            legacyEnv.services.bus_service.startPolling();
        });
        return {};
    }
};

registry.category("services").add("webNotifyService", webNotifyService);
