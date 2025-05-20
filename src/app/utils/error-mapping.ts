export const enum GSErrors {
  OK = 0,
  Data_Pending = 100001, // Data is still being processed, query again for the response
  NETWORK_ERROR = 500026,
  DATA_PENDING = 100001, // Data is still being processed, query again for the response
  OPERATION_CANCELED = 200001, // user canceled, in login process
  PERMISSION_GRANTED = 200002, // Inner code
  PERMISSION_NOT_GRANTED = 200003, // Inner code
  REDIRECT = 200004, // Inner code
  NEW_USER = 200005, // Inner code
  OPERATION_DONE = 200006, // Inner code
  UPDATE_USER = 200007, // Inner code
  OK_WITH_ERRORS = 200008, // For reports - when we return ok to client but had acceptable errors (that we want to know about) on the way
  ACCOUNTS_LINKED = 200009, // After linkign accoutns via login, return this error code
  OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS = 200010, // For setAccountInfo using the conflictHandling param - profile was saved, but the email conflicts with another user
  ACCOUNT_PENDING_REGISTRATION = 206001, // For accounts API,
  ACCOUNT_PENDING_VERIFICATION = 206002, // For accounts API; consider moving to 403xxx section in the future.
  ACCOUNT_MISSING_LOGINID = 206003, // For accounts API
  IDENTITY_ALREADY_ASSIGNED = 206004, // For import accounts API
  AFTER_EMAIL_VERIFICATION = 206005,
  PENDING_CODE_VERIFICATION = 206006,
  CLIENT_LOG = 300001, // internal, for reporting erorrs in client SDKS
  INVALID_DATA_CENTER = 301001, // "Invalid data-center". with error details of: "This API key is served by another data center".
  INVALID_REQUEST_FORMAT = 400001, // could be all kind of errors with wrong request (non secure when should be secure, wrong authentication header)
  MISSING_REQUIRED_PARAMETER = 400002,
  UNIQUE_IDENTIFIER_EXISTS = 400003,
  INVALID_PARAMETER_FORMAT = 400004,
  INVALID_PARAMETER_VALUE = 400006,
  DUPLICATE_VALUE = 400007,
  INVALID_AUTHENTICATION_HEADER = 400008, // OAuth2
  VALIDATION_ERROR = 400009, // In accounts.register, whenever there is a validation error
  INVALID_REDIRECT_URI = 400011, // OAuth2
  INVALID_RESPONSE_TYPE = 400012, // OAuth2
  UNSUPPORTED_GRANT_TYPE = 400013, // OAuth2
  INVALID_GRANT = 400014, // OAuth2
  CODE_EXPIRED = 400015, // OAuth2
  SCHEMA_VALIDATION_FAILED = 400020,
  CAPTCHA_VERIFICATION_FAILED = 400021,
  UNIQUE_INDEX_VALIDATION_ERROR = 400022,
  INVALID_TYPE_VALIDATION_ERROR = 400023,
  DYNAMIC_FIELDS_VALIDATION_ERROR = 400024,
  WRITE_ACCESS_VALIDATION_ERROR = 400025,
  INVALID_FORMAT_VALIDATION_ERROR = 400026,
  REQUIRED_VALUE_VALIDATION_ERROR = 400027,
  EMAIL_NOT_VERIFIED = 400028,
  SCHEMA_CONFLICT_ERROR = 400029, // To handle User story 34330. Improve ElasticSearchMappingException handling in DS.IndexObject
  OPERATION_NOT_ALLOWED = 400030, // User story 34311 - If addConnection is called return an error ("operation not allowed for this account", 400XXX error).
  SECURITY_VERIFICATION_FAILED = 400050,
  INVALID_APIKEY_PARAMETER = 400093,
  NOT_SUPPORTED = 400096, // the function is not supported by any of the currently connected providers
  UNSUPPORTED_USER_AGENT = 400097, //
  NO_PROVIDERS = 400100, // client?
  POPUP_BLOCKED = 400101, // client
  INVALID_EVENT_HANDLER = 400102, // client
  INVALID_CONTAINERID = 400103, // client
  NOT_CONNECTED = 400106, // user is not connected to the required network or to any network
  INVALID_SITE_DOMAIN = 400120, // the current domain does not match the domain configured for the api key
  PROVIDER_CONFIGURATION_ERROR = 400122, // the current domain does not match the domain configured for the api key
  LIMIT_REACHED = 400124, // GameMechanics - Cap was reached
  FREQUENCY_LIMIT_REACHED = 400125, // Comments/Feed - Spam Caps was reached
  INVALID_ACTION = 400126, // GameMechanics - Invalid action. Triggered action can't be initiated externally
  INSUFFICIENT_POINTS_TO_REDEEM = 400127, // GameMechanics - Insufficient_points_to_redeem
  SIGNATURE_TIMESTAMP_EXPIRED = 400128, // the timestamp inside the signature is expired
  Error_During_Extensions_Operation = 400302,
  Extension_Point_Custom_Error = 400303, // Extension point return a userFacingErrorMessage
  INVALID_POLICY_CONFIGURATION = 401000, // Policy configuration is invalid (i.e. prevent regitration)
  AUTHENTICATION_REQUIRED = 401003, // Authentication required
  SUSPECTED_SPAM = 401010, // Someone is trying to use Gigya to send a email with a URL that does not match any of the client's domains; suspected spam.
  LOGIN_FAILED_CAPTCHA_REQUIRED = 401020, // accounts.login - captcha required
  REQUEST_FAILED_CAPTCHA_REQUIRED = 401023, // accounts.login - captcha required
  LOGIN_FAILED_WRONG_CAPTCHA = 401021, // accounts.login - wrong captcha code
  OLD_PASSWORD_USED = 401030, // The user provided his previous password, not the current one
  FORBIDDEN = 403000,
  INVALID_SESSION_TOKEN = 403001, // internal
  REQUEST_HAS_EXPIRED = 403002, // the timestamp or expiration of the token used exceeded the allowed time window
  INVALID_REQUEST_SIGNATURE = 403003,
  DUPLICATE_NONCE = 403004,
  UNAUTHORIZED_USER = 403005, // the user id passed is not valid for this site
  SENSITIVE_DATA_SENT_OVER_HTTP = 403006, // when sending the secret key in REST it has to be over HTTPS
  PERMISSION_DENIED = 403007, // Comments server - Permission denied (readOnly,moderation site).
  INVALID_OPENID_URL = 403008, // cannot find an openId endpoint on the url or username given for openId login
  PROVIDER_SESSION_EXPIRED = 403009, // the user session for this provider is expired
  INVALID_SECRET = 403010, // the request has an invalid secret key
  SESSION_HAS_EXPIRED = 403011, // the session for this user has expired
  NO_VALID_SESSION = 403012, // requested user has no valid session
  UNVERIFIED_USER = 403013, // the user is not verified in SSO session
  MISSING_REQUEST_REFERRER = 403015, // we can't validate the request because the referrer header is missing
  UNEXPECTED_PROVIDER_USER = 403017, // the logged in user is different from the one expected
  PERMISSION_NOT_REQUESTED = 403022, // the action needs a user permission and it was not requested
  NO_USER_PERMISSION = 403023, // the action needs a user permission and we don't have one
  PROVIDER_LIMIT_REACHED = 403024, // the provider limit for this action was exceeded
  INVALID_TOKEN = 403025, // OAuth2
  UNAUTHORIZED_ACCESS_ERROR = 403026, // Calls to accounts.isAvailableLoginID When preventLoginIDHarvesting = true should return an appropriate 403xxx unauthorized access error.
  DIFFERENT_USER_FOR_REAUTH = 403027, // Different user tried to re-authorize.
  SESSION_EXPIRED_RETRY = 403030, // Inner code - when the facebook session is expired and the client waits for FB on page to load
  APPROVED_BY_MODERATOR = 403031, // comments - cant flag comment, it was approved by the moderator already.
  TOKEN_HAS_RENEWED = 403032, // the token is no longer valid, but we have new token to provide
  NO_USER_COOKIE = 403035, // no user cookie
  UNAUTHORIZED_PARTNER = 403036, // partner is disabled
  POST_DENIED = 403037, // Comments server - Post denied when the user tried to review twice.
  NO_LOGIN_TICKET = 403040, // no login ticket in callback url
  ACCOUNT_DISABLED = 403041, // For accounts - when gs.accounts.IsActive=false
  INVALID_LOGINID = 403042, // For accounts - when trying to login with a loginID that do not exists
  LOGIN_IDENTIFIER_EXISTS = 403043, // For account: If providerEmail is defined as a loginIdentifier in the policy, and the email address received from the provider exists in the gs.loginIdentifiers collection but associated with a different UUID than the current user, then return "Login identifier exists" error code (403xxx).
  UNDERAGE_USER = 403044, // For COPPA compliance (Children's Online Privacy Protection Act)
  INVALID_SITE_CONFIGURATION_ERROR = 403045, // For accounts - site DS is enabled though no DSSize was configured.
  LOGINID_DOES_NOT_EXIST = 403047, // For accounts - when trying to reset password with a loginID that do not exists
  API_RATE_LIMIT_EXCEEDED = 403048,
  PENDING_PASSWORD_CHANGE = 403100, // The user's password needs to be changed
  ACCOUNT_PENDING_TFA_VERIFICATION = 403101,
  ACCOUNT_PENDING_TFA_REGISTRATION = 403102,
  ACCOUNT_PENDING_RECENT_LOGIN = 403110,
  ACCOUNT_TEMPORARILY_LOCKED_OUT = 403120, // Too many login attempts; account locked-out
  REDUNDANT_OPERATION = 403200, // The client performed an operation that is redundant
  INVALID_APPLICATION_ID = 403201, // The app id provided is different than the one configured for the site
  NOT_FOUND = 404000, // Comments server - Category not found. Accounts - email verification failed, uuid not found.
  FRIEND_NOT_FOUND = 404001, // the user id provided as a target is not a friend for the current user
  CATEGORY_NOT_FOUND = 404002, // Comments server - Category not found.
  UID_NOT_FOUND = 404003,
  RESOURCE_NOT_FOUND = 404004, // Client side - image not found after upload
  INVALID_API_METHOD = 405001, // internal for our JS API
  IDENTITY_EXISTS = 409001, // when trying to connect to a provider that is already connected or link to an already linked account
  GONE = 410000, // Resource no longer available. Data Key Server - key revoked/expired.
  REQUEST_ENTITY_TOO_LARGE = 413001, // Comments server - Request to large
  COMMENT_TEXT_TOO_LARGE = 413002, // Comments server - Comment Text to large.
  OBJECT_TOO_LARGE = 413003, // DataStore object is too large
  PROFILE_PHOTO_TOO_LARGE = 413004, // Profile photo is too large, exceeds maximum allowed content length
  REQUEST_URI_TOO_LONG = 414000, //The URI provided was too long for the server to process.
  MISSING_USER_PHOTO = 409010, // Error - missing user photo
  COUNTER_NOT_REGISTERED = 409011, // Counter not registered
  INVALID_GMID_TICKET = 409012, // gmid ticket is not valid
  SAML_MAPPED_ATTRIBUTE_NOT_FOUND = 409013, // Used when mapped attribute value for providerUID cannot be retreived
  SAML_CERTIFICATE_NOT_FOUND = 409014, // Used when SAML certificate could not be retreived.
  SAML_MESSAGE_NOT_FOUND = 409015, // Used when cached SAML message could not be retreived.
  GENERAL_SERVER_ERROR = 500001,
  SERVER_LOGIN_ERROR = 500002, // general error during the login process
  DEFAULT_APPLICATION_CONFIGURATION_ERROR = 500003, // For multiple DC - when no default application can be found in DefaultApplications.config. With error details of: "Default application isn't configured for dataCenter"
  SESSION_MIGRATION_ERROR = 500014, // error in migrating old to new facebook session
  PROVIDER_ERROR = 500023, // general error from the provider
  DATABASE_ERROR = 500028,
  USERNAME_REQUIRED = 500029, // Inner code
  NO_PROVIDER_APPLICATION = 500031, // the application for this provider is not defined for this site
  LOAD_FAILED = 500032, // client error
  INVALID_ENVIRONMENT_CONFIG = 500033, // In case there is no target environment in the config file we'd return with  invalid_environment_config error.
  ERROR_DURING_BACKEND_OPERATION = 500034,
  TIMEOUT = 504001, // outgoing request had timed out
  CLIENTTIMEOUT = 504002, // For server SDKs - a client side timeout
  INVALID_URL = 404004, // embed.ly 404 error message - url is not valid
  MEDIA_ITEMS_NOT_SUPPORTED = 401001, // Media items a not allowed for this category
  MISSING_ERROR_CODE = 599999,
  THIS_AUTHENTICATION_METHOD_IS_CURRENTLY_DISABLED  = 403300,
  FORCE_LINK_LOGIN_IDENTIFIER_EXISTS = 409003,
  PASSKEY_AUTHENTICATOR_REGISTERED = 400130,
  PASSKEY_ABORTED = 400131,
  PASSKEY_ERROR = 500131
}


export var ScreenOptions_CONSTS = {
  accountsLinkedScreen: 'data-on-accounts-linked-screen',
  pendingTfaRegistrationScreen: 'data-on-pending-tfa-registration-screen',
  pendingTfaVerificationScreen: 'data-on-pending-tfa-verification-screen',
  pendingRegistrationScreen: 'data-on-pending-registration-screen',
  existingLoginIdentifierScreen: 'data-on-existing-login-identifier-screen',
  pendingVerificationScreen: 'data-on-pending-verification-screen',
  pendingCodeVerificationScreen: 'data-on-pending-email-verification-code',
  missingLoginIdScreen: 'data-on-missing-loginid-screen',
  pendingPasswordChangeScreen: 'data-on-pending-password-change-screen',
  pendingReAuthenticationScreen: 'data-on-pending-recent-login-screen',
  authenticationRequiredScreen: 'data-on-authentication-required-screen',

  width: 'data-width',
  height: 'data-height',
  caption: 'data-caption',
};

export interface IErrorAttributeInfo {
  name?: string;
  nextScreen?: (form: any) => Promise<string> | string;
  requiresFinalize?: boolean;
  resetFinalizeNeededState?: boolean;
}

export interface INumericMap<T> {
  [key: number]: T;
}

export var PendingErrorAttributes: INumericMap<IErrorAttributeInfo> = {};
PendingErrorAttributes[GSErrors.ACCOUNTS_LINKED] = {
  name: ScreenOptions_CONSTS.accountsLinkedScreen,
  nextScreen: form => form._screen.accountsLinkedScreen || '_finish',
  requiresFinalize: true,
};
PendingErrorAttributes[GSErrors.ACCOUNT_PENDING_REGISTRATION] = {
  name: ScreenOptions_CONSTS.pendingRegistrationScreen,
  nextScreen: form => form._screen.pendingRegistrationScreen,
  requiresFinalize: true,
};
PendingErrorAttributes[GSErrors.LOGIN_IDENTIFIER_EXISTS] = PendingErrorAttributes[GSErrors.OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS] = {
  name: ScreenOptions_CONSTS.existingLoginIdentifierScreen,
  nextScreen: form => {
    return form._screenSet.data.regToken && form._screen.existingLoginIdentifierScreen;},
    requiresFinalize: true,
};
PendingErrorAttributes[GSErrors.FORCE_LINK_LOGIN_IDENTIFIER_EXISTS] = {
  name: ScreenOptions_CONSTS.existingLoginIdentifierScreen,
  nextScreen: form => form._screen.existingLoginIdentifierScreen
}
PendingErrorAttributes[GSErrors.ACCOUNT_PENDING_VERIFICATION] = {
  name: ScreenOptions_CONSTS.pendingVerificationScreen,
  nextScreen: form => form._screen.pendingVerificationScreen,
  resetFinalizeNeededState: true,
};
PendingErrorAttributes[GSErrors.ACCOUNT_MISSING_LOGINID] = {
  name: ScreenOptions_CONSTS.missingLoginIdScreen,
  nextScreen: form => form._screen.missingLoginIdScreen,
};
PendingErrorAttributes[GSErrors.PENDING_PASSWORD_CHANGE] = {
  name: ScreenOptions_CONSTS.pendingPasswordChangeScreen,
  nextScreen: form => form._screen.pendingPasswordChangeScreen,
  requiresFinalize: true,
};
PendingErrorAttributes[GSErrors.ACCOUNT_PENDING_TFA_VERIFICATION] = {
  name: ScreenOptions_CONSTS.pendingTfaVerificationScreen,
  nextScreen: form => form._screen.pendingTfaVerificationScreen,
  requiresFinalize: true,
};
PendingErrorAttributes[GSErrors.ACCOUNT_PENDING_TFA_REGISTRATION] = {
  name: ScreenOptions_CONSTS.pendingTfaRegistrationScreen,
  nextScreen: form => form._screen.pendingTfaRegistrationScreen,
  requiresFinalize: true,
};
PendingErrorAttributes[GSErrors.ACCOUNT_PENDING_RECENT_LOGIN] = {
  name: ScreenOptions_CONSTS.pendingReAuthenticationScreen,
  nextScreen: form => form._screen.pendingReAuthenticationScreen,
};
PendingErrorAttributes[GSErrors.PENDING_CODE_VERIFICATION] = {
  name: ScreenOptions_CONSTS.pendingCodeVerificationScreen,
  requiresFinalize: true,
  nextScreen: async form => form._screen.pendingCodeVerificationScreen
};
PendingErrorAttributes[GSErrors.AUTHENTICATION_REQUIRED] = {
  name: ScreenOptions_CONSTS.authenticationRequiredScreen,
  requiresFinalize: false,
  nextScreen: async form => form._screen.authenticationRequiredScreen
};
