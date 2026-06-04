---
storybook_id: components-tag--docs
title: "Components/Tag"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-tag--docs"
import_path: "./src/components/Tag/Tag.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:52.265Z
---

# Source: Components/Tag

- Storybook ID: `components-tag--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-tag--docs
- Import path: `./src/components/Tag/Tag.mdx`
- Capture status: `extracted`

# Tag

A non-interactive label used to describe, categorize, or communicate status about content.
Tags never respond to user interaction — they have no hover, focus, or active states.

## Overview

## Integration

```
import {
  Tag,
  TagCategoricalColor,
  TagSemanticColor,
  TagVariant,
  TagSize,
  IconName,
} from "@sanofi-accelerator/elements";

// Categorical tag
<Tag color={TagCategoricalColor.BLUE} variant={TagVariant.SUBTLE}>
  Marketing
</Tag>

// Semantic tag with icon
<Tag
  color={TagSemanticColor.GREEN}
  variant={TagVariant.SUBTLE}
  icon={IconName.CHECK_CIRCLE}
>
  Published
</Tag>
```

## API Reference

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| children* | Text content of the tag.ReactNode | - | "Label" |
| color* | Tag color - categorical for labeling, semantic for status."neutral""branded""blue""orange""teal""purple""yellow""cyan""pink""brown""indigo""mint""red""green""semantic_blue""semantic_red""semantic_orange""semantic_green"Show 10 more... | - | colorChoose option...blueorangetealpurpleyellowcyanpinkbrownindigomintredgreenneutralbrandedsemantic_bluesemantic_redsemantic_orangesemantic_green |
| variant | Visual style variant."outline""subtle""solid""ghost" | "TagVariant.SUBTLE" | variantChoose option...subtleoutlinesolidghost |
| size | Size of the tag."sm""md""lg" | "TagSize.MD" | sizeChoose option...smmdlg |
| icon | Icon displayed before the text."error""warning""abc""access_time""accessibility""account_balance""account_circle""add""add_circle""add_circle_outline""add_comment""add_link""add_photo_alternate""add_shopping_cart""admin_panel_settings""alarm""align_horizontal_center""align_horizontal_left""align_horizontal_right""align_vertical_bottom""align_vertical_center""align_vertical_top""analytics""apartment""api""approval""apps""archive""arrow_back""arrow_back_ios""arrow_downward""arrow_drop_down""arrow_drop_up""arrow_forward""arrow_forward_ios""arrow_left""arrow_left_alt""arrow_outward""arrow_right""arrow_right_alt""arrow_selector_tool""arrow_upward""article""assignment_late""assistant""assistant_direction""attach_file""attach_money""attachment""auto_awesome""auto_fix_high""auto_graph""autorenew""av_timer""avg_pace""bar_chart""bedtime""biotech""bolt""book""bookmark""bookmark_add""bookmark_added""bookmark_border""bookmark_remove""bookmarks""border_all""border_color""broken_image""bug_report""build""build_circle""calendar_month""calendar_today""call""cancel""candlestick_chart""category""center_focus_weak""change_circle""chart_data""chat""chat_add_on""chat_bubble""check""check_box""check_box_outline_blank""check_circle""check_circle_outline""checklist""chevron_left""chevron_right""circle""clear""close""cloud""cloud_done""cloud_download""cloud_upload""co_present""code""collapse_all""collapse_content""comment""compress""confirmation_number""contact_support""content_copy""content_paste""content_paste_go""control_point_duplicate""cookie""copy_all""credit_card""crop_7_5""dangerous""dark_mode""dashboard""dashboard_2_gear""data_object""data_thresholding""database""date_range""delete""delete_forever""delete_outline""deployed_code""description""design_services""do_not_disturb_on""dock_to_left""dock_to_right""docs""document_scanner""done""done_all""download""download_2""drag_handle""drag_indicator""drive_export""edit""edit_calendar""edit_document""edit_note""edit_off""edit_square""electric_bolt""email""empty_dashboard""error_circle_rounded""event""expand""expand_content""expand_less""expand_more""experiment""eye_tracking""face""fact_check""factory""fast_forward""fast_rewind""favorite""favorite_border""feedback""file_copy""file_download""file_upload""filter_alt""filter_alt_off""filter_list""filter_list_off""fingerprint""first_page""fit_screen""flag""flip""flip_to_back""flip_to_front""folder""folder_managed""folder_open""folder_supervised""format_align_center""format_align_left""format_align_right""format_bold""format_h1""format_h2""format_h3""format_h4""format_h5""format_h6""format_image_left""format_indent_decrease""format_indent_increase""format_italic""format_list_bulleted""format_list_numbered""format_paragraph""format_quote""format_underlined""forum""front_loader""fullscreen""fullscreen_exit""gamepad""generating_tokens""gesture""globe""grain""grid_view""group""groups""handshake""handyman""healing""health_and_safety""help""help_outline""hexagon""highlight""highlight_off""history""home""home_health""horizontal_rule""hourglass""hourglass_empty""hub""image""inbox""info""ink_eraser""insert_chart""insights""instant_mix""inventory""inventory_2""invert_colors""ios_share""key""key_off""keyboard_arrow_down""keyboard_arrow_left""keyboard_arrow_right""keyboard_arrow_up""keyboard_double_arrow_left""keyboard_double_arrow_right""keyboard_return""keyboard_tab""lab_profile""language""last_page""launch""layers""left_panel_close""left_panel_open""lens""library_add""library_books""light_mode""lightbulb""line_end_circle""link""list""local_florist""local_library""local_shipping""location_on""lock""lock_clock""lock_open""login""logout""magic_button""mail""manage_accounts""manage_search""medical_information""medical_services""medication_liquid""menu""menu_book""menu_open""merge""merge_type""message""mic""mixture_med""mode_comment""more_horiz""more_vert""motion_photos_on""motion_sensor_active""move_down""move_up""my_location""navigate_before""navigate_next""new_label""new_window""newspaper""newsstand""north_east""note_add""notes""notifications""notifications_active""notifications_off""numbers""open_in_full""open_in_new""pageview""paid""palette""pan_tool""pause""pending""people""perm_identity""person""person_add""person_outline""phone""photo""photo_camera""photo_filter""photo_library""picture_as_pdf""pie_chart""pin_drop""place""play_arrow""preview""print""progress_activity""public""push_pin""question_answer""radar""radio_button_checked""radio_button_unchecked""redo""refresh""remove""remove_shopping_cart""replay""restart_alt""restore_from_trash""reviews""right_panel_close""right_panel_open""rocket""rocket_launch""rotate_90_degrees_cw""rotate_left""rotate_right""route""save""save_as""scale""schedule""schema""school""science""screen_search_desktop""search""search_off""send""sensors""settings""share""shield""shopping_bag""shopping_cart""short_text""show_chart""sick""siren""skip_next""skip_previous""smart_toy""sms""sort""source""source_notes""space_bar""space_dashboard""speed""square""stack""stacked_line_chart""stacks""star""star_border""stethoscope""stop""stop_circle""storage""stream""strikethrough_s""subdirectory_arrow_right""subject""summarize""sunny""supervised_user_circle""support""support_agent""swap_horiz""sync""sync_alt""system_update_alt""table""table_chart""table_chart_view""table_rows""table_view""tablet""task""task_alt""team_dashboard""terminal""text_fields""text_format""text_increase""text_snippet""thumb_down""thumb_up""thumb_up_off""timeline""timer""tips_and_updates""toggle_off""toggle_on""token""tour""track_changes""transform""translate""trending_down""trending_flat""trending_up""tune""unarchive""undo""unfold_less""unfold_more""update""upload""upload_2""upload_file""verified""verified_user""vertical_shades""video_library""view_agenda""view_column""view_list""view_module""view_sidebar""visibility""visibility_off""volume_down""volume_mute""volume_off""volume_up""volunteer_activism""warehouse""watch""water_drop""waving_hand""widgets""zoom_in""zoom_out""elements_apple""elements_facebook""elements_figma""elements_github""elements_google""elements_instagram""elements_linkedIn""elements_medium""elements_messenger""elements_pinterest""elements_snapchat""elements_threads""elements_tikTok""elements_whatsApp""elements_x""elements_youTube"Show 484 more... | - | iconChoose option...undefinedabcaccess_timeaccessibilityaccount_balanceaccount_circleaddadd_circleadd_circle_outlineadd_commentadd_linkadd_photo_alternateadd_shopping_cartadmin_panel_settingsalarmalign_horizontal_centeralign_horizontal_leftalign_horizontal_rightalign_vertical_bottomalign_vertical_centeralign_vertical_topanalyticsapartmentapiapprovalappsarchivearrow_backarrow_back_iosarrow_downwardarrow_drop_downarrow_drop_uparrow_forwardarrow_forward_iosarrow_leftarrow_left_altarrow_outwardarrow_rightarrow_right_altarrow_selector_toolarrow_upwardarticleassignment_lateassistantassistant_directionattach_fileattach_moneyattachmentauto_awesomeauto_fix_highauto_graphautorenewav_timeravg_pacebar_chartbedtimebiotechboltbookbookmarkbookmark_addbookmark_addedbookmark_borderbookmark_removebookmarksborder_allborder_colorbroken_imagebug_reportbuildbuild_circlecalendar_monthcalendar_todaycallcancelcandlestick_chartcategorycenter_focus_weakchange_circlechart_datachatchat_add_onchat_bubblecheckcheck_boxcheck_box_outline_blankcheck_circlecheck_circle_outlinechecklistchevron_leftchevron_rightcircleclearclosecloudcloud_donecloud_downloadcloud_uploadco_presentcodecollapse_allcollapse_contentcommentcompressconfirmation_numbercontact_supportcontent_copycontent_pastecontent_paste_gocontrol_point_duplicatecookiecopy_allcredit_cardcrop_7_5dangerousdark_modedashboarddashboard_2_geardata_objectdata_thresholdingdatabasedate_rangedeletedelete_foreverdelete_outlinedeployed_codedescriptiondesign_servicesdo_not_disturb_ondock_to_leftdock_to_rightdocsdocument_scannerdonedone_alldownloaddownload_2drag_handledrag_indicatordrive_exporteditedit_calendaredit_documentedit_noteedit_offedit_squareelectric_boltemailempty_dashboarderrorerror_circle_roundedeventexpandexpand_contentexpand_lessexpand_moreexperimenteye_trackingfacefact_checkfactoryfast_forwardfast_rewindfavoritefavorite_borderfeedbackfile_copyfile_downloadfile_uploadfilter_altfilter_alt_offfilter_listfilter_list_offfingerprintfirst_pagefit_screenflagflipflip_to_backflip_to_frontfolderfolder_managedfolder_openfolder_supervisedformat_align_centerformat_align_leftformat_align_rightformat_boldformat_h1format_h2format_h3format_h4format_h5format_h6format_image_leftformat_indent_decreaseformat_indent_increaseformat_italicformat_list_bulletedformat_list_numberedformat_paragraphformat_quoteformat_underlinedforumfront_loaderfullscreenfullscreen_exitgamepadgenerating_tokensgestureglobegraingrid_viewgroupgroupshandshakehandymanhealinghealth_and_safetyhelphelp_outlinehexagonhighlighthighlight_offhistoryhomehome_healthhorizontal_rulehourglasshourglass_emptyhubimageinboxinfoink_eraserinsert_chartinsightsinstant_mixinventoryinventory_2invert_colorsios_sharekeykey_offkeyboard_arrow_downkeyboard_arrow_leftkeyboard_arrow_rightkeyboard_arrow_upkeyboard_double_arrow_leftkeyboard_double_arrow_rightkeyboard_returnkeyboard_tablab_profilelanguagelast_pagelaunchlayersleft_panel_closeleft_panel_openlenslibrary_addlibrary_bookslight_modelightbulbline_end_circlelinklistlocal_floristlocal_librarylocal_shippinglocation_onlocklock_clocklock_openloginlogoutmagic_buttonmailmanage_accountsmanage_searchmedical_informationmedical_servicesmedication_liquidmenumenu_bookmenu_openmergemerge_typemessagemicmixture_medmode_commentmore_horizmore_vertmotion_photos_onmotion_sensor_activemove_downmove_upmy_locationnavigate_beforenavigate_nextnew_labelnew_windownewspapernewsstandnorth_eastnote_addnotesnotificationsnotifications_activenotifications_offnumbersopen_in_fullopen_in_newpageviewpaidpalettepan_toolpausependingpeopleperm_identitypersonperson_addperson_outlinephonephotophoto_cameraphoto_filterphoto_librarypicture_as_pdfpie_chartpin_dropplaceplay_arrowpreviewprintprogress_activitypublicpush_pinquestion_answerradarradio_button_checkedradio_button_uncheckedredorefreshremoveremove_shopping_cartreplayrestart_altrestore_from_trashreviewsright_panel_closeright_panel_openrocketrocket_launchrotate_90_degrees_cwrotate_leftrotate_rightroutesavesave_asscalescheduleschemaschoolsciencescreen_search_desktopsearchsearch_offsendsensorssettingsshareshieldshopping_bagshopping_cartshort_textshow_chartsicksirenskip_nextskip_previoussmart_toysmssortsourcesource_notesspace_barspace_dashboardspeedsquarestackstacked_line_chartstacksstarstar_borderstethoscopestopstop_circlestoragestreamstrikethrough_ssubdirectory_arrow_rightsubjectsummarizesunnysupervised_user_circlesupportsupport_agentswap_horizsyncsync_altsystem_update_alttabletable_charttable_chart_viewtable_rowstable_viewtablettasktask_altteam_dashboardterminaltext_fieldstext_formattext_increasetext_snippetthumb_downthumb_upthumb_up_offtimelinetimertips_and_updatestoggle_offtoggle_ontokentourtrack_changestransformtranslatetrending_downtrending_flattrending_uptuneunarchiveundounfold_lessunfold_moreupdateuploadupload_2upload_fileverifiedverified_uservertical_shadesvideo_libraryview_agendaview_columnview_listview_moduleview_sidebarvisibilityvisibility_offvolume_downvolume_mutevolume_offvolume_upvolunteer_activismwarehousewarningwatchwater_dropwaving_handwidgetszoom_inzoom_outelements_appleelements_facebookelements_figmaelements_githubelements_googleelements_instagramelements_linkedInelements_mediumelements_messengerelements_pinterestelements_snapchatelements_threadselements_tikTokelements_whatsAppelements_xelements_youTube |

## Variants

## Sizes

## Categorical Colors

## Semantic Colors
