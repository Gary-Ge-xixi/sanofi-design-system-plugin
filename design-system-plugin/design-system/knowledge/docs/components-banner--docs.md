---
storybook_id: components-banner--docs
title: "Components/Banner"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-banner--docs"
import_path: "./src/components/Banner/Banner.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:05:45.439Z
---

# Source: Components/Banner

- Storybook ID: `components-banner--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-banner--docs
- Import path: `./src/components/Banner/Banner.mdx`
- Capture status: `extracted`

# Banner

## A Banner is a message that appears at an edge of the interface to provide
feedback to users.

## Section banner

Sits at the top of the dedicated section, only taking the same width as the section.

A Banner was successfully created with an optional action link

## Global banner

This design is meant to be used as a fixed banner on top of the viewport.

A Banner was successfully created with an optional action link

## Anatomy

```
import { Banner } from "@sanofi-accelerator/elements";

export default () => (
<Banner variant="success" onClose={() => {}} onAction={() => {}} actionLabel="Confirm" isGlobal={false}>
  A Banner was successfully created
</Banner>
);
```

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| variant | Banner variant"success""error""warning""neutral""info" | "BannerVariant.NEUTRAL" |
| isGlobal | Banner global styleboolean | false |
| onClose | A callback fired when clicking the X buttonMouseEventHandler<HTMLButtonElement> | - |
| onAction | A callback fired when clicking the action buttonMouseEventHandler<HTMLButtonElement> | - |
| actionLabel | The label of the action buttonstring | - |
| icon | Custom icon to display.
Defaults to variant-appropriate icon."abc""access_time""accessibility""account_balance""account_circle""add""add_circle""add_circle_outline""add_comment""add_link""add_photo_alternate""add_shopping_cart""admin_panel_settings""alarm""align_horizontal_center""align_horizontal_left""align_horizontal_right""align_vertical_bottom""align_vertical_center""align_vertical_top""analytics""apartment""api""approval""apps""archive""arrow_back""arrow_back_ios""arrow_downward""arrow_drop_down""arrow_drop_up""arrow_forward""arrow_forward_ios""arrow_left""arrow_left_alt""arrow_outward""arrow_right""arrow_right_alt""arrow_selector_tool""arrow_upward""article""assignment_late""assistant""assistant_direction""attach_file""attach_money""attachment""auto_awesome""auto_fix_high""auto_graph""autorenew""av_timer""avg_pace""bar_chart""bedtime""biotech""bolt""book""bookmark""bookmark_add""bookmark_added""bookmark_border""bookmark_remove""bookmarks""border_all""border_color""broken_image""bug_report""build""build_circle""calendar_month""calendar_today""call""cancel""candlestick_chart""category""center_focus_weak""change_circle""chart_data""chat""chat_add_on""chat_bubble""check""check_box""check_box_outline_blank""check_circle""check_circle_outline""checklist""chevron_left""chevron_right""circle""clear""close""cloud""cloud_done""cloud_download""cloud_upload""co_present""code""collapse_all""collapse_content""comment""compress""confirmation_number""contact_support""content_copy""content_paste""content_paste_go""control_point_duplicate""cookie""copy_all""credit_card""crop_7_5""dangerous""dark_mode""dashboard""dashboard_2_gear""data_object""data_thresholding""database""date_range""delete""delete_forever""delete_outline""deployed_code""description""design_services""do_not_disturb_on""dock_to_left""dock_to_right""docs""document_scanner""done""done_all""download""download_2""drag_handle""drag_indicator""drive_export""edit""edit_calendar""edit_document""edit_note""edit_off""edit_square""electric_bolt""email""empty_dashboard""error""error_circle_rounded""event""expand""expand_content""expand_less""expand_more""experiment""eye_tracking""face""fact_check""factory""fast_forward""fast_rewind""favorite""favorite_border""feedback""file_copy""file_download""file_upload""filter_alt""filter_alt_off""filter_list""filter_list_off""fingerprint""first_page""fit_screen""flag""flip""flip_to_back""flip_to_front""folder""folder_managed""folder_open""folder_supervised""format_align_center""format_align_left""format_align_right""format_bold""format_h1""format_h2""format_h3""format_h4""format_h5""format_h6""format_image_left""format_indent_decrease""format_indent_increase""format_italic""format_list_bulleted""format_list_numbered""format_paragraph""format_quote""format_underlined""forum""front_loader""fullscreen""fullscreen_exit""gamepad""generating_tokens""gesture""globe""grain""grid_view""group""groups""handshake""handyman""healing""health_and_safety""help""help_outline""hexagon""highlight""highlight_off""history""home""home_health""horizontal_rule""hourglass""hourglass_empty""hub""image""inbox""info""ink_eraser""insert_chart""insights""instant_mix""inventory""inventory_2""invert_colors""ios_share""key""key_off""keyboard_arrow_down""keyboard_arrow_left""keyboard_arrow_right""keyboard_arrow_up""keyboard_double_arrow_left""keyboard_double_arrow_right""keyboard_return""keyboard_tab""lab_profile""language""last_page""launch""layers""left_panel_close""left_panel_open""lens""library_add""library_books""light_mode""lightbulb""line_end_circle""link""list""local_florist""local_library""local_shipping""location_on""lock""lock_clock""lock_open""login""logout""magic_button""mail""manage_accounts""manage_search""medical_information""medical_services""medication_liquid""menu""menu_book""menu_open""merge""merge_type""message""mic""mixture_med""mode_comment""more_horiz""more_vert""motion_photos_on""motion_sensor_active""move_down""move_up""my_location""navigate_before""navigate_next""new_label""new_window""newspaper""newsstand""north_east""note_add""notes""notifications""notifications_active""notifications_off""numbers""open_in_full""open_in_new""pageview""paid""palette""pan_tool""pause""pending""people""perm_identity""person""person_add""person_outline""phone""photo""photo_camera""photo_filter""photo_library""picture_as_pdf""pie_chart""pin_drop""place""play_arrow""preview""print""progress_activity""public""push_pin""question_answer""radar""radio_button_checked""radio_button_unchecked""redo""refresh""remove""remove_shopping_cart""replay""restart_alt""restore_from_trash""reviews""right_panel_close""right_panel_open""rocket""rocket_launch""rotate_90_degrees_cw""rotate_left""rotate_right""route""save""save_as""scale""schedule""schema""school""science""screen_search_desktop""search""search_off""send""sensors""settings""share""shield""shopping_bag""shopping_cart""short_text""show_chart""sick""siren""skip_next""skip_previous""smart_toy""sms""sort""source""source_notes""space_bar""space_dashboard""speed""square""stack""stacked_line_chart""stacks""star""star_border""stethoscope""stop""stop_circle""storage""stream""strikethrough_s""subdirectory_arrow_right""subject""summarize""sunny""supervised_user_circle""support""support_agent""swap_horiz""sync""sync_alt""system_update_alt""table""table_chart""table_chart_view""table_rows""table_view""tablet""task""task_alt""team_dashboard""terminal""text_fields""text_format""text_increase""text_snippet""thumb_down""thumb_up""thumb_up_off""timeline""timer""tips_and_updates""toggle_off""toggle_on""token""tour""track_changes""transform""translate""trending_down""trending_flat""trending_up""tune""unarchive""undo""unfold_less""unfold_more""update""upload""upload_2""upload_file""verified""verified_user""vertical_shades""video_library""view_agenda""view_column""view_list""view_module""view_sidebar""visibility""visibility_off""volume_down""volume_mute""volume_off""volume_up""volunteer_activism""warehouse""warning""watch""water_drop""waving_hand""widgets""zoom_in""zoom_out""elements_apple""elements_facebook""elements_figma""elements_github""elements_google""elements_instagram""elements_linkedIn""elements_medium""elements_messenger""elements_pinterest""elements_snapchat""elements_threads""elements_tikTok""elements_whatsApp""elements_x""elements_youTube"Show 484 more... | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| classNames | Custom CSS classes for banner elements.{ content?: string; icon?: string; title?: string \| undefined; close?: string \| undefined; } \| undefined | - |
