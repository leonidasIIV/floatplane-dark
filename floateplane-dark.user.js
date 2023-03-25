// ==UserScript==
// @name        Floatplane Dark theme
// @version     0.1.0
// @namespace   flwrz
// @author      flwrz
// @description Dark themed UserCSS for the Floatplane.com subscription service for browser theming extensions like Stylus or Stylish
// @homepageURL https://github.com/leonidasIIV/floatplane-dark
// @supportURL  https://github.com/leonidasIIV/floatplane-dark/issues
// @updateURL   https://github.com/leonidasIIV/floatplane-dark/floatplane-dark.user.css
// @license     The Unlicense
// @include     http://*.floatplane.com/*
// @include     https://*.floatplane.com/*
// @exclude     https://www\\.floatplane\\.com\\/support.*
// @grant       none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

/* Floatplane Dark theme (or Darkplane) */
/* Author: flwrz */
/* Shoutout to whole Floatplane team for a great paid early access content! */
/* This theme can be considered as a temporary dark theme until Floatplane gets its own dark theme */
/* If there are any problems with the theme, you may try to contact me via private messages on Twitter, LinusTechTips forums or on Discord */
/* !important flag is implemented due to _ngcontent attribues which are added during compilation of the website: [_ngcontent-c14] */
/* The !important flag allows to apply the CSS rule over the CSS rules given with selectors with attributes attached to them */


/* ---- */
/* Page */
/* ---- */
/* Links */
addGlobalStyle('a { color: #5886bd; }');

addGlobalStyle('body { color: #eee; }');

/* Page background */
addGlobalStyle('.page-wrapper .route-wrapper { background-color: #0e0e10; }');

/* ------- */
/* Sidebar */
/* ------- */
/* Sidebar */
addGlobalStyle('.sidebar { background: #000; }');

/* Dropup */
addGlobalStyle('.sidebar .sb-hovergroup > .subscription-item > .dropup { background: #222; }');

/* -------- */
/* Homepage */
/* -------- */
addGlobalStyle('.tabs-wrapper .nav { background: #0e0e10; box-shadow: inset 0 -1px 0 #333, -1px 0 0 #0e0e10, 1px 0 0 #0e0e10; }');

/* ---------------- */
/* Channel homepage */
/* ---------------- */
/* Header */
addGlobalStyle('.channel-intro-wrapper .channel-intro-content .channel-intro-width-wrapper .channel-nav, .ReactProfileNavContainer .ReactProfileNavInternal, .ProfileIntroBarGeneric { background: #0e0e10 !important; box-shadow: inset 0 -1px 0 hsl(0, 0%, 10%), -1px 0 0 #0e0e10, 1px 0 0 #0e0e10 !important; }');

/* Channel title */
addGlobalStyle('.DescriptionHeaderComponent .channel-info .channel-title, .channel-title { color: #fff; }');

/* Header transition */
addGlobalStyle('.channel-card .channel-card-header .channel-bg-wrapper .channel-bg::after, .channel-intro-wrapper .channel-intro-bg-wrapper::after, .page-wrapper .hero-wrapper .hero .hero-background::after { background: linear-gradient(to top, rgba(14, 14, 16, 0.6) 0%, rgba(14, 14, 16, 0) 75%) !important; }');

/* Header hover */
addGlobalStyle('.channel-intro-wrapper .channel-intro-content .channel-intro-width-wrapper .channel-nav .channel-nav-item:hover, .tabs-wrapper .nav .nav-item:hover { background: rgba(255, 255, 255, 0.05); color: #0094c8; }');

/* Active button in header */
addGlobalStyle('.channel-intro-wrapper .channel-intro-content .channel-intro-width-wrapper .channel-nav .channel-nav-item.active, .tabs-wrapper .nav .nav-item.active, .ProfileNavItemComponent.active, .ReactProfileNavItem.active, .ProfileNavItem.active { color: rgb(0, 144, 211) !important; }');

/* Header search */
addGlobalStyle('.channel-search .search-bar.focus, \
    .ReactChannelIntroSearch.active .SearchInput { \
        background: #ffffff0a !important; \
        box-shadow: inset 0 -1px 0 #444 !important; \
        border-left: none !important; \
    }');

/* Video titles */
addGlobalStyle('.info-box .title, \
    .video-content-wrapper .video-list .video-list-item, \
        .post-list .post-list-item, \
            .PostTileTitle { \
                color: #eee !important \
            }');

/* Video post details */
addGlobalStyle('.PostTileInfoMinor a, \
    .PostTileAge, \
        .PostTileMediaBox .duration { \
            color: #555 !important \
        }');

/* Channel description */
addGlobalStyle('.markdown-body { color: #eee; }');

/* Channel description underline */
addGlobalStyle('.markdown-body h1, .markdown-body h2 { border-bottom: 1px solid #555; }');

/* Subbox */
addGlobalStyle('.subBox, .ReactChannelStatsContainer, .ReactCreatorPlanBoxContainer, \
    .ReactChannelStatsContainer, .ReactCreatorPlanBoxContainer.sharp, \
        .ChannelStatsContainer { \
            background-color: rgb(30, 30, 30) !important; \
            box-shadow: inset 0 -1px 0 #333, -1px 0 0 #333, 1px 0 0 #333 !important; \
        }');

addGlobalStyle('.subBox .header .price, \
    .subBox .header .sub-count, \
        .ReactChannelStatsContainer > div .income-value, .ReactChannelStatsContainer > div .subs-count, \
            .ChannelStatsContainer > div .income-value, .ChannelStatsContainer > div .subs-count, \
                .ChannelStatsContainer > div .title { \
                    color: #fff; \
                }');

addGlobalStyle('.ReactPlanBoxHeaderContainer .price { color: #aaa; }');

/* Modal */
addGlobalStyle('.modal-content { background-color: #222; }');
addGlobalStyle('.subBox.feather { border: 1px solid #333 !important; }');

/* Channel name in modal */
addGlobalStyle('.creatorMain .creatorCard .creatorVital .creatorTitle { color: #fff !important; }');

/* ------ */
/* Player */
/* ------ */
/* Video player background */
addGlobalStyle('.player-background { background: none !important; }');

/* ----- */
/* Video */
/* ----- */
/* Page BG */
addGlobalStyle('.route-wrapper { background: #0e0e10 !important; }');

/* Video list */
addGlobalStyle('.video-content-wrapper .video-list .video-list-item + .video-list-item, .post-list .post-list-item + .post-list-item { border-top: 1px solid #333 !important; }');

/* Comments input box */
addGlobalStyle('.video-content-wrapper .textarea-wrapper textarea, \
    .CommentReplyInput textarea { \
        background: #333; \
        border: 1px solid #333; \
        color: #fff; \
        padding: 7px; \
        border-radius: 5px; \
    }');

/* Comment input box placeholder */
addGlobalStyle('.CommentReplyInput textarea::placeholder { color: #fff; }');

/* Comments authors */
addGlobalStyle('.video-content-wrapper .comments-wrapper .comment .comment-header .header-text .author, .video-content-wrapper .comments-wrapper .comment .reply-header .header-text .author, .video-content-wrapper .comments-wrapper .reply .comment-header .header-text .author, .video-content-wrapper .comments-wrapper .reply .reply-header .header-text .author, .video-content-wrapper .replies-wrapper .comment .comment-header .header-text .author, \
                    .video-content-wrapper .replies-wrapper .comment .reply-header .header-text .author, \
                        .video-content-wrapper .replies-wrapper .reply .comment-header .header-text .author, \
                            .video-content-wrapper .replies-wrapper .reply .reply-header .header-text .author, \
                                .ReactCommentComponent .comment-header .author { \
                                    color: #aaa; \
                                }');

/* Comment body */
addGlobalStyle('.ReactCommentComponent .comment-body { color: #b5b5b5; }');

/* Comment actions */
addGlobalStyle('.ReactContentButton.variant-icon-text, .ReactContentButton.variant-text, .ReactContentButton { color: #ccc; }');

/* Comment Like buttons */
addGlobalStyle('.ReactContentButton.variant-interaction > svg * { fill: #ccc; }');

/* Comment load more */
addGlobalStyle('.ReactCommentReplies .loadMoreButton > span { color: #aaa; }');

/* Download dropdown */
addGlobalStyle('.download-container .dropdown { background: #333 !important; }');

addGlobalStyle('.download-container .dropdown .dropdown-item { color: #ccc !important; }');

/* ------------ */
/* Descriptions */
/* ------------ */
/* Description box */
addGlobalStyle('.generic-wrapper .generic-block, \
    .generic-wrapper .generic-block-padded, \
        .generic-wrapper .generic-block-padded-threeway { \
            background: #222; \
            border: 1px solid #333; \
        }');

addGlobalStyle('.DescriptionHeaderComponent { border-bottom: 1px solid #444 !important; }');

addGlobalStyle('fp-quill-viewer p, fp-quill-viewer, .quill-viewer p { color: #b5b5b5 !important; }');

/* Title */
addGlobalStyle('.video-content-wrapper .video-description-wrapper .video-description-header .video-title, \
    .DescriptionHeaderComponent .video-title, .title-text { \
        color: #fff !important; \
    }');

/* Channel name under title */
addGlobalStyle('.ReactDescriptionHeaderComponent .section-channel .info .channel-title { color: #c6c6c6; }');

/* Subtitle */
addGlobalStyle('.video-content-wrapper .video-description-wrapper .video-description-header .channel-info .channel-title, \
    .video-description-wrapper .video-description *, \
        .video-description-wrapper .video-description { \
            color: #bfbfbf !important; \
        }');

/* Links in descriptions */
addGlobalStyle('.video-content-wrapper .video-description-wrapper .video-description a { color: #5886bd; }');

/* Underline */
addGlobalStyle('.video-content-wrapper .video-description-wrapper .video-description-header { border-bottom: 1px solid #444; }');

/* Gradient for readmore */
addGlobalStyle('.video-content-wrapper .video-description-wrapper .video-description::after, \
    .DescriptionBodyComponent .text-container::after { \
        background: linear-gradient(to top, #1a1a1a 0%, rgba(255, 251, 251, 0) 70%); \
    }');

/* Show more button */
addGlobalStyle('.video-content-wrapper .video-description-wrapper .expand-description, \
    .DescriptionBodyComponent .expand { \
        background: #1a1a1a !important; \
    }');

/* Vote button */
addGlobalStyle('.vote-button:not(.highlight) { background-color: #888 !important; }');

/* ------------------ */
/* Recommended videos */
/* ------------------ */
/* Header */
addGlobalStyle('.ReactRelatedPostList > .title { color: #fff; }');

/* Video title */
addGlobalStyle('.ReactRelatedPostList .post-list-item .info .title { color: #fff; }');

/* Creator */
addGlobalStyle('.ReactRelatedPostList .post-list-item .info .row-minor a { color: #888; }')

/* Date */
addGlobalStyle('.ReactRelatedPostList .post-list-item .info .row-minor { color: #6d6d6d; }');

/* ------------- */
/* User activity */
/* ------------- */
addGlobalStyle('.activity-feed .activity-feed-period .feed-list { color: #bbb !important; }');

/* Links */
addGlobalStyle('.activity-feed .activity-feed-period .feed-list .feed-item .item-caption a { color: #5886bd !important; }');

/* ------------- */
/* User settings */
/* ------------- */
addGlobalStyle('.cms-layout .cms-pane, \
    .cms-layout .settings-pane, \
        .settings-layout-right .settings-pane { \
            background: #222; \
            border: 1px solid #333; \
        }');

addGlobalStyle('.cms-layout .cms-pane .col-section > .row-section, \
    .cms-layout .settings-pane .col-section > .row-section, \
        .settings-layout-right .settings-pane .col-section > .row-section { \
            border-bottom: 1px solid #333; \
        }');

addGlobalStyle('.cms-layout .cms-pane .col-section, \
    .cms-layout .settings-pane .col-section, \
        .settings-layout-right .settings-pane .col-section { \
            border-left: 1px solid #333; \
            border-bottom: 1px solid #333; \
        }');

addGlobalStyle('.cms-layout .cms-pane .col-section > .row-section > .row-title.subtitle, \
    .cms-layout .settings-pane .col-section > .row-section > .row-title.subtitle, \
        .settings-layout-right .settings-pane .col-section > .row-section > .row-title.subtitle, \
            .cms-layout .cms-pane .col-section > .row-section > .row-title, \
                .cms-layout .settings-pane .col-section > .row-section > .row-title, \
                    .settings-layout-right .settings-pane .col-section > .row-section > .row-title { \
                        color: #fff; \
                    }');

addGlobalStyle('.settings-general .username, \
    .stats-group > .stat-item > .value { \
        color: #dff7ff !important; \
    }');

addGlobalStyle('.cms-layout .cms-pane .vertical-list.alternate-rows .list-item:nth-child(2n), \
    .cms-layout .settings-pane .vertical-list.alternate-rows .list-item:nth-child(2n), \
        .settings-layout-right .settings-pane .vertical-list.alternate-rows .list-item:nth-child(2n) { \
            background: #252525; \
        }');

addGlobalStyle('.auth-group-section { border-bottom: 1px solid #444 !important; }');

addGlobalStyle('.support-category:not(:last-child) { border-bottom: 1px solid #333 !important; }');

addGlobalStyle('.settings-general { border-bottom: 1px solid #444 !important; }');

/* Invoice */
addGlobalStyle('.invoice:not(:last-child) { border-bottom: 1px solid #444 !important; }');

addGlobalStyle('.invoice .invoice-content .invoice-sub-container { border: 1px solid #444 !important; }');

addGlobalStyle('.invoice .invoice-content span.invoice-light { color: hsla(0, 0%, 76.9%, 0.75) !important; }');

addGlobalStyle('.invoice .invoice-content { color: #eee !important; }');

/* Menu */
addGlobalStyle('.settings-layout-left .navlist { \
    background: #000; \
    border: 1px solid #333; \
}');

addGlobalStyle('.settings-layout-left .navlist > .navlist-item:not(:first-of-type) { border-top: 1px solid #333; }');

/* Headers */
addGlobalStyle('.white-background { background: #333 !important; }');

addGlobalStyle('.cms-layout .cms-pane .col-section.darker, \
    .cms-layout .settings-pane .col-section.darker, \
        .settings-layout-right .settings-pane .col-section.darker { \
            background: #444; \
        }');

addGlobalStyle('.cms-layout .cms-pane .col-section > .row-section p.light, \
    .cms-layout .settings-pane .col-section > .row-section p.light, \
        .settings-layout-right .settings-pane .col-section > .row-section p.light, \
            .cms-layout .cms-pane .col-section > .row-section p, \
                .cms-layout .settings-pane .col-section > .row-section p, \
                    .settings-layout-right .settings-pane .col-section > .row-section p { \
                        color: #eee; \
                    }');

addGlobalStyle('.cms-layout .cms-pane .col-section > .row-section, \
    .cms-layout .settings-pane .col-section > .row-section, \
        .settings-layout-right .settings-pane .col-section > .row-section { \
            color: #fff; \
        }');

/* Inputs */
addGlobalStyle('.cms-layout .cms-pane .input-group textarea, \
    .cms-layout .cms-pane .input-group > input, \
        .cms-layout .settings-pane .input-group textarea, \
            .cms-layout .settings-pane .input-group > input, \
                .settings-layout-right .settings-pane .input-group textarea, \
                    .settings-layout-right .settings-pane .input-group > input { \
                        color: #eee; \
                        background: #333; \
                        border: 1px solid #444; \
                    }');

addGlobalStyle('.cms-layout .cms-pane .dropdown-container > select, \
    .cms-layout .cms-pane .input-group > select, \
        .cms-layout .settings-pane .dropdown-container > select, \
            .cms-layout .settings-pane .input-group > select, \
                .settings-layout-right .settings-pane .dropdown-container > select, \
                    .settings-layout-right .settings-pane .input-group > select { \
                        color: #eee; \
                        background: #333; \
                        border: 1px solid #444; \
                    }');

addGlobalStyle('.cms-layout .cms-pane .input-group .custom-text + label, \
    .cms-layout .cms-pane .input-group select + label, \
        .cms-layout .cms-pane .input-group textarea + label, \
            .cms-layout .cms-pane .input-group > input + label, \
                .cms-layout .settings-pane .input-group .custom-text + label, \
                    .cms-layout .settings-pane .input-group select + label, \
                        .cms-layout .settings-pane .input-group textarea + label, \
                            .cms-layout .settings-pane .input-group > input + label, \
                                .settings-layout-right .settings-pane .input-group .custom-text + label, \
                                    .settings-layout-right .settings-pane .input-group select + label, \
                                        .settings-layout-right .settings-pane .input-group textarea + label, \
                                            .settings-layout-right .settings-pane .input-group > input + label { \
                                                color: #ddd; \
                                            }');

/* -------------------- */
/* Browse creators page */
/* -------------------- */
/* Search bar */
addGlobalStyle('.creator-search .search-bar { \
    border: 1px solid #333 !important; \
    background: #222 !important; \
    color: #eee !important; \
}');

/* Creator card */
addGlobalStyle('.creator-cards figure, \
    .creator-box { \
        background-color: #333 !important; \
        border-radius: 5px !important; \
    }');

addGlobalStyle('.creator-cards figure .boxWrap img { \
    height: 100% !important; \
    width: 100% !important; \
    margin-left: 0 !important; \
    margin-top: 0 !important; \
    border-radius: 5px 5px 0 0 !important; \
}');

/* Channel name */
addGlobalStyle('.wrapper-part-info { \
    background-color: #222 !important; \
    border-radius: 0 0 5px 5px !important; \
}');

/* Channel name */
addGlobalStyle('#part-info { color: #ddd !important; }');

/* ---- */
/* Chat */
/* ---- */
/* Chat background */
addGlobalStyle('live-chat.ng-star-inserted { \
    background: #111; \
    border: 1px solid #333; \
}');

addGlobalStyle('.chat-message-list { background: #111 !important; }');

addGlobalStyle('.live-chat-wrapper .live-chat-sizer { border-left: none !important; }');

/* Player width */
addGlobalStyle('.player-wrapper .player-container.livestream { max-width: 100%; }');

/* Chat message */
addGlobalStyle('.chat-message-list .chat-message .chat-text { color: #9aa1ac !important; }');


/* Chat mention */
addGlobalStyle('.chat-message-list .chat-message .chat-text .text-mention { color: #609eff !important; }');

/* Emote picker */
addGlobalStyle('.expand { \
    background: #000 !important; \
    border-top: none !important; \
    border-bottom: none !important; \
}');

/* Emoji container */
addGlobalStyle('.chat-emoji-container, .chat-scroll-message { background-color: #2b2b2b !important; }');

/* Chat options */
/*.chat-messages-options[_ngcontent-c5],*/
addGlobalStyle('.chat-messages-options { background-color: #333 !important; }');

/* Username */
/*.chat-messages-container[_ngcontent-c5] .message-list[_ngcontent-c5] .chat-message[_ngcontent-c5] .chat-username[_ngcontent-c5],*/
addGlobalStyle('.chat-message-list .chat-message .chat-username, \
    .chat-messages-container .message-list .chat-message .chat-username { \
        color: #aaa !important; \
    }');

/* Chat message container */
/*.chat-messages-container[_ngcontent-c5] .message-list[_ngcontent-c5] .chat-message[_ngcontent-c5],*/
addGlobalStyle('.chat-messages-container .message-list .chat-message, .chat-message-list .chat-message { border-bottom: 1px solid #333 !important; }');

/* Chat message container - Moderator, Creator */
/*.chat-messages-container[_ngcontent-c5] .message-list[_ngcontent-c5] .chat-message.type-Creator[_ngcontent-c5],
        .chat-messages-container[_ngcontent-c5] .message-list[_ngcontent-c5] .chat-message.type-Moderator[_ngcontent-c5],*/
addGlobalStyle('.chat-messages-container .message-list .chat-message.type-Creator, \
    .chat-messages-container .message-list .chat-message.type-Moderator { \
        background: #1e2833 !important; \
        border-bottom: 1px solid #333 !important; \
    }');

/* Chat input */
/*.chat-messages-container[_ngcontent-c5] .chat-entry-container[_ngcontent-c5],*/
addGlobalStyle('.chat-input-container, \
    .chat-input-container, .chat-input, \
        .chat-messages-container .chat-entry-container { \
            background-color: #333 !important; \
            border-top: 1px solid #333 !important; \
        }');

/*.chat-messages-container[_ngcontent-c5] .chat-entry-container[_ngcontent-c5] .chat-input[_ngcontent-c5],*/
addGlobalStyle('.chat-messages-container .chat-entry-container .chat-input { background-color: #333 !important; }');

/* Viewer list */
addGlobalStyle('.chat-view-container { background: #111 !important; }');
