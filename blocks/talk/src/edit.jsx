import { icon } from "../../../helpers/icon";
import { PanelBody, BaseControl, DateTimePicker } from "@wordpress/components";
import {
  useBlockProps,
  InspectorControls,
  InnerBlocks,
} from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const { startDateTime, endDateTime } = attributes;
  const blockProps = useBlockProps({ className: "limited-time" });

  const startDateTimePanelClassName =
    startDateTime || endDateTime
      ? "su-components-panel__body su-components-panel__body-changed"
      : "su-components-panel__body";

  const formatDate = (dateVal) => {
    if (dateVal) {
      const date = new Date(dateVal);
      return (
        date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2) +
        " " +
        ("0" + date.getHours()).slice(-2) +
        ":" +
        ("0" + date.getMinutes()).slice(-2)
      );
    }
  };

  const showStartDateTime = () => {
    if (startDateTime) {
      return (
        <span className="limited-time-start">
          {formatDate(startDateTime)} から
        </span>
      );
    }
  };

  const showEndDateTime = () => {
    if (endDateTime) {
      return (
        <span className="limited-time-end">{formatDate(endDateTime)} まで</span>
      );
    }
  };

  const showDateTime = () => {
    return (
      <>
        {showLabel()}
        {showStartDateTime()}
        {showEndDateTime()}
      </>
    );
  };

  const showLabel = () => {
    if (isInThePeriod()) {
      return <span className="limited-time-is-show">表示中</span>;
    } else {
      return <span className="limited-time-is-hidden">非表示中</span>;
    }
  };

  // 表示期間中かどうか
  const isInThePeriod = () => {
    // startDateTimeが設定されていなければ1970-01-01になる
    const start = new Date(startDateTime);
    const end = endDateTime === null ? null : new Date(endDateTime);
    const now = new Date();

    // 終了期間が設定されている場合
    if (end === null) {
      // 開始日時以降ならtrue
      return start < now;

      // 終了期間が設定されている場合
    } else {
      return start < now && now < end;
    }
  };

  return (
    <div {...blockProps}>
      <InspectorControls key="setting">
        <PanelBody
          title="表示期限を設定"
          initialOpen={true}
          icon={icon}
          className={startDateTimePanelClassName}
        >
          <BaseControl
            label="表示開始日時"
            className="su-components-base-control"
          >
            <DateTimePicker
              currentDate={startDateTime}
              onChange={(value) => setAttributes({ startDateTime: value })}
              onReset={() => setAttributes({ startDateTime: null })}
            />
          </BaseControl>
          <BaseControl
            label="表示終了日時"
            className="su-components-base-control"
          >
            <DateTimePicker
              currentDate={endDateTime}
              onChange={(value) => setAttributes({ endDateTime: value })}
              onReset={() => setAttributes({ endDateTime: null })}
            />
          </BaseControl>
        </PanelBody>
      </InspectorControls>

      <div className="limited-time-label">{showDateTime()}</div>
      <div className="limited-time-inner">
        <InnerBlocks />
      </div>
    </div>
  );
}
