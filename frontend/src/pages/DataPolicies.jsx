import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/ContextProvider";

const DataPolicies = () => {
    const { t, isDataLoaded } = useAppContext();

    if (!isDataLoaded) {
        return null;
    }
    return (
        <>
            <section className="data-policies-section">
                <h2 className="data-policies-title">
                    <span className="heading-top">Privacy</span>
                    <span className="title-span"> Policy</span>

                    <img
                        className="pink-line"
                        src="/images/Pink-Line.svg"
                        alt="ornamental pink line"
                    />
                </h2>
                <p>{t("data_policies.policy_intro")}</p>
                <br />
                <ul className="policy-titles">
                    <li>
                        <h3>{t("data_policies.1_definitions.title")}</h3>

                        <span>{t("data_policies.1_definitions.main")}</span>

                        <ul className="policy-articles">
                            <li>{t("data_policies.1_definitions.part_a")}</li>
                            <li>{t("data_policies.1_definitions.part_b")}</li>
                            <li>{t("data_policies.1_definitions.part_c")}</li>
                            <li>{t("data_policies.1_definitions.part_d")}</li>
                            <li>{t("data_policies.1_definitions.part_e")}</li>
                            <li>{t("data_policies.1_definitions.part_f")}</li>
                            <li>{t("data_policies.1_definitions.part_g")}</li>
                            <li>{t("data_policies.1_definitions.part_h")}</li>
                            <li>{t("data_policies.1_definitions.part_i")}</li>
                            <li>{t("data_policies.1_definitions.part_j")}</li>
                            <li>{t("data_policies.1_definitions.part_k")}</li>
                        </ul>
                    </li>
                    <br />

                    <li>
                        <h3>
                            {t("data_policies.2_controller_information.title")}
                        </h3>
                        <p>
                            {t("data_policies.2_controller_information.main")}
                        </p>
                        <p>
                            {t("data_policies.2_controller_information.name")}
                        </p>
                        <p>
                            {t(
                                "data_policies.2_controller_information.address"
                            )}
                        </p>
                        <p>
                            {t(
                                "data_policies.2_controller_information.zip_code"
                            )}{" "}
                            {t("data_policies.2_controller_information.city")}
                        </p>
                        <p>
                            {t("data_policies.2_controller_information.phone")}{" "}
                            {t(
                                "data_policies.2_controller_information.phone_number"
                            )}
                        </p>
                        <p>
                            {t("data_policies.2_controller_information.email")}{" "}
                            {t(
                                "data_policies.2_controller_information.email_address"
                            )}
                        </p>
                        <p>
                            {t(
                                "data_policies.2_controller_information.website"
                            )}{" "}
                            {t(
                                "data_policies.2_controller_information.website_url"
                            )}
                        </p>
                    </li>
                    <br />

                    <li>
                        <h3>{t("data_policies.3_cookies.title")}</h3>
                        <p>{t("data_policies.3_cookies.part_1")}</p>
                        <p>{t("data_policies.3_cookies.part_2")}</p>
                        <p>{t("data_policies.3_cookies.part_3")}</p>
                    </li>
                    <br />

                    <li>
                        <h3>{t("data_policies.4_collection_data.title")}</h3>
                        <p>{t("data_policies.4_collection_data.part_1")}</p>
                        <p>{t("data_policies.4_collection_data.part_2")}</p>
                    </li>
                    <br />

                    <li>
                        <h3>
                            {t("data_policies.5_newsletter_subscription.title")}
                        </h3>
                        <p>
                            {t(
                                "data_policies.5_newsletter_subscription.part_1"
                            )}
                        </p>
                        <p>
                            {t(
                                "data_policies.5_newsletter_subscription.part_2"
                            )}
                        </p>
                        <p>
                            {t(
                                "data_policies.5_newsletter_subscription.part_3"
                            )}
                        </p>
                        <p>
                            {t(
                                "data_policies.5_newsletter_subscription.part_4"
                            )}
                        </p>
                    </li>
                    <br />

                    <li>
                        <h3>
                            {t("data_policies.6_newsletter_tracking.title")}
                        </h3>
                        <p>{t("data_policies.6_newsletter_tracking.part_1")}</p>
                        <p>{t("data_policies.6_newsletter_tracking.part_2")}</p>
                    </li>
                    <br />

                    <li>
                        <h3> {t("data_policies.7_contact_website.title")}</h3>
                        <p>{t("data_policies.7_contact_website.main")}</p>
                    </li>
                    <br />

                    <li>
                        <h3>
                            {t("data_policies.8_erasure_blocking_data.title")}
                        </h3>
                        <p>{t("data_policies.8_erasure_blocking_data.main")}</p>
                    </li>
                    <br />

                    <li>
                        <h3>{t("data_policies.9_rights.title")}</h3>
                        <ul className="policy-articles">
                            <li>{t("data_policies.9_rights.part_a")}</li>
                            <li>
                                {t("data_policies.9_rights.part_b")}
                                <ul>
                                    {Array(9)
                                        .fill()
                                        .map((listItem, index) => (
                                            <li
                                                className="bulletpoints-list"
                                                key={index}
                                            >
                                                {t(
                                                    `data_policies.9_rights.part_b_items.${index}`
                                                )}
                                            </li>
                                        ))}
                                </ul>
                            </li>
                            <li>{t("data_policies.9_rights.part_c")}</li>
                            <li>
                                <p>{t("data_policies.9_rights.part_d_1")}</p>

                                <ul>
                                    {Array(6)
                                        .fill()
                                        .map((listItem, index) => (
                                            <li
                                                className="bulletpoints-list"
                                                key={index}
                                            >
                                                {t(
                                                    `data_policies.9_rights.part_d_items.${index}`
                                                )}
                                            </li>
                                        ))}
                                </ul>
                                <p>{t("data_policies.9_rights.part_d_2")}</p>
                            </li>
                            <li>
                                {t("data_policies.9_rights.part_e_1")}
                                <ul>
                                    {Array(4)
                                        .fill()
                                        .map((listItem, index) => (
                                            <li
                                                className="bulletpoints-list"
                                                key={index}
                                            >
                                                {t(
                                                    `data_policies.9_rights.part_e_items.${index}`
                                                )}
                                            </li>
                                        ))}
                                </ul>
                                <p>{t("data_policies.9_rights.part_e_2")}</p>
                            </li>
                            <li>{t("data_policies.9_rights.part_f")}</li>
                            <li>{t("data_policies.9_rights.part_g")}</li>
                            <li>{t("data_policies.9_rights.part_h")}</li>
                            <li>{t("data_policies.9_rights.part_i")}</li>
                        </ul>
                    </li>
                    <br />

                    <li>
                        <h3>
                            {t(
                                "data_policies.10_data_protection_applications.title"
                            )}
                        </h3>
                        <p>
                            {t(
                                "data_policies.10_data_protection_applications.main"
                            )}
                        </p>
                    </li>
                    <br />

                    <li>
                        <h3>
                            {t(
                                "data_policies.11_data_protection_provisions_google_analytics.title"
                            )}
                        </h3>
                        <p>
                            {t(
                                "data_policies.11_data_protection_provisions_google_analytics.part_1"
                            )}
                        </p>
                        <p>
                            {t(
                                "data_policies.11_data_protection_provisions_google_analytics.part_2"
                            )}
                        </p>
                        <p>
                            {t(
                                "data_policies.11_data_protection_provisions_google_analytics.part_3"
                            )}
                        </p>
                        <p>
                            {t(
                                "data_policies.11_data_protection_provisions_google_analytics.part_4"
                            )}
                        </p>
                        <p>
                            {t(
                                "data_policies.11_data_protection_provisions_google_analytics.part_5"
                            )}
                        </p>
                        <p>
                            {t(
                                "data_policies.11_data_protection_provisions_google_analytics.part_6.part_1"
                            )}{" "}
                            <span className="text-underlined">
                                {t(
                                    "data_policies.11_data_protection_provisions_google_analytics.part_6.url_tools"
                                )}
                            </span>
                            {t(
                                "data_policies.11_data_protection_provisions_google_analytics.part_6.part_2"
                            )}
                        </p>
                        <p>
                            {t(
                                "data_policies.11_data_protection_provisions_google_analytics.part_7.part_1"
                            )}{" "}
                            <span className="text-underlined">
                                {t(
                                    "data_policies.11_data_protection_provisions_google_analytics.part_7.url_google_privacy"
                                )}
                            </span>
                            {t(
                                "data_policies.11_data_protection_provisions_google_analytics.part_7.part_2"
                            )}
                            <span className="text-underlined">
                                {t(
                                    "data_policies.11_data_protection_provisions_google_analytics.part_7.url_google_analytics_terms"
                                )}
                            </span>
                            {t(
                                "data_policies.11_data_protection_provisions_google_analytics.part_7.part_3"
                            )}
                            <span className="text-underlined">
                                {t(
                                    "data_policies.11_data_protection_provisions_google_analytics.part_7.url_google_analytics"
                                )}
                            </span>
                            <span>
                                {t(
                                    "data_policies.11_data_protection_provisions_google_analytics.part_7.part_4"
                                )}
                            </span>
                        </p>
                    </li>
                    <br />

                    <li>
                        {" "}
                        <h3>{t("data_policies.12_legal_basis.title")}</h3>
                        <p>{t("data_policies.12_legal_basis.main")}</p>
                    </li>
                    <br />

                    <li>
                        {" "}
                        <h3>
                            {t("data_policies.13_legitimate_interests.title")}
                        </h3>
                        <p>{t("data_policies.13_legitimate_interests.main")}</p>
                    </li>
                    <br />

                    <li>
                        {" "}
                        <h3>{t("data_policies.14_period_data_store.title")}</h3>
                        <p>{t("data_policies.14_period_data_store.main")}</p>
                    </li>
                    <br />

                    <li>
                        {" "}
                        <h3>
                            {t(
                                "data_policies.15_provision_data_contract.title"
                            )}
                        </h3>
                        <p>
                            {t("data_policies.15_provision_data_contract.main")}
                        </p>
                    </li>
                    <br />

                    <li>
                        {" "}
                        <h3> {t("data_policies.16_decision_making.title")}</h3>
                        <p>{t("data_policies.16_decision_making.part_1")}</p>
                        <p>
                            {t(
                                "data_policies.16_decision_making.part_2.part_1"
                            )}{" "}
                            <span className="text-underlined">
                                {t(
                                    "data_policies.16_decision_making.part_2.legal_tech"
                                )}
                            </span>
                            {t(
                                "data_policies.16_decision_making.part_2.part_2"
                            )}{" "}
                            <span className="text-underlined">
                                {t(
                                    "data_policies.16_decision_making.part_2.tracking_software"
                                )}
                            </span>
                            {t(
                                "data_policies.16_decision_making.part_2.part_3"
                            )}
                            <span className="text-underlined">
                                {t(
                                    "data_policies.16_decision_making.part_2.prof"
                                )}{" "}
                            </span>
                            {t(
                                "data_policies.16_decision_making.part_2.part_4"
                            )}{" "}
                            <span className="text-underlined">
                                {t(
                                    "data_policies.16_decision_making.part_2.solmecke"
                                )}
                            </span>{" "}
                            {t(
                                "data_policies.16_decision_making.part_2.part_5"
                            )}{" "}
                        </p>
                    </li>
                </ul>

                <NavLink className="go-back-products" to="/products">
                    {t("data_policies.go_back_products")}
                </NavLink>
            </section>
        </>
    );
};

export default DataPolicies;
