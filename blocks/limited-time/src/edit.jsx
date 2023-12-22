// import { icon } from "../../../helpers/icon";
import { PanelBody, DateTimePicker, Button } from '@wordpress/components';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
  const { startDateTime, endDateTime } = attributes;
  const blockProps = useBlockProps();

  const formatDate = (dateVal) => {
    if (dateVal) {
      const date = new Date(dateVal);
      return (
        date.getFullYear() +
        '-' +
        ('0' + (date.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + date.getDate()).slice(-2) +
        ' ' +
        ('0' + date.getHours()).slice(-2) +
        ':' +
        ('0' + date.getMinutes()).slice(-2)
      );
    }
  };

  const showStartDateTime = () => {
    if (startDateTime) {
      return <span className="limited-time-start">{formatDate(startDateTime)} から</span>;
    }
  };

  const showEndDateTime = () => {
    if (endDateTime) {
      return <span className="limited-time-end">{formatDate(endDateTime)} まで</span>;
    }
  };

  const showDateTime = () => {
    const Metadata = ({ className, children }) => {
      return (
        <div className={`limited-time-metadata ${className}`}>
          <div className="limited-time-label">{children}</div>
          <div className="limited-time-date">
            {showStartDateTime()}
            {showEndDateTime()}
          </div>
        </div>
      );
    };

    if (isInThePeriod()) {
      return (
        <Metadata className="limited-time-is-show">
          <span className="material-symbols-outlined">visibility</span>
          <span className="limited-time-labe-text">表示中</span>
        </Metadata>
      );
    } else {
      return (
        <Metadata className="limited-time-is-hidden">
          <span className="material-symbols-outlined">visibility_off</span>
          <span className="limited-time-islabe-text">非表示中</span>
        </Metadata>
      );
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
          title="表示開始日時"
          initialOpen={true}
          className="litob-components-panel-body litob-limited-time-panel-body"
        >
          <DateTimePicker
            currentDate={startDateTime}
            onChange={(value) => setAttributes({ startDateTime: value })}
            onReset={() => setAttributes({ startDateTime: null })}
          />

          <Button
            className="litob-components-button components-button is-tertiary"
            onClick={() => setAttributes({ startDateTime: null })}
          >
            クリア
          </Button>
        </PanelBody>

        <PanelBody
          title="表示終了日時"
          initialOpen={true}
          className="litob-components-panel-body litob-limited-time-panel-body"
        >
          <DateTimePicker
            currentDate={endDateTime}
            onChange={(value) => setAttributes({ endDateTime: value })}
            // onReset={() => setAttributes({ endDateTime: null })}  なんかボタンなくなったから自力で実装した
          />
          <Button
            className="litob-components-button components-button is-tertiary"
            onClick={() => setAttributes({ endDateTime: null })}
          >
            クリア
          </Button>
        </PanelBody>
      </InspectorControls>

      <div className="limited-time-metadata">{showDateTime()}</div>
      <div className="litob-inner-blocks">
        <InnerBlocks />
      </div>
    </div>
  );
}
