import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl, Button } from '@wordpress/components';
import { useState, useRef, useEffect } from '@wordpress/element';
import Evaluation from './components/Evaluation';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Edit({ attributes, setAttributes }) {
  const { title, items } = attributes;
  const refs = useRef([]);
  const focusedIndex = useRef(null); // 新しいフォーカスするアイテムのインデックスを保持するためのref

  const [droppableId] = useState(`droppable-${Math.random().toString(36).slice(2, 9)}`);

  // ドラッグ&ドロップの終了時の処理
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = [...items];
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setAttributes({ items: newItems });
  };

  useEffect(() => {
    if (items.length === 0) {
      setAttributes({
        items: [{ id: `item-0`, name: __('Sample Item', 'text-domain'), rating: 3 }],
      });
    }
  }, []);

  useEffect(() => {
    // フォーカスを設定するアイテムがある場合、そのアイテムのTextControlにフォーカスを設定
    if (focusedIndex.current !== null && refs.current[focusedIndex.current]) {
      refs.current[focusedIndex.current].focus();
      focusedIndex.current = null; // フォーカス後はリセット
    }

    // refsとitemsの長さが一致するように、不要なrefをクリア
    refs.current = refs.current.slice(0, items.length);
  }, [items]);

  const updateItem = (index, field, value) => {
    const newItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setAttributes({ items: newItems });
  };

  const generateRandomId = () => {
    // 16桁のランダムなIDを生成する
    return Math.random().toString(36).slice(2, 16);
  };

  // アイテム追加関数
  const addItem = (index) => {
    const newItem = {
      id: generateRandomId(),
      name: '',
      rating: 3,
    };
    const newItems = [...items];
    if (index === undefined) {
      newItems.push(newItem);
      focusedIndex.current = newItems.length - 1; // 末尾に追加する場合
    } else {
      newItems.splice(index + 1, 0, newItem);
      focusedIndex.current = index + 1; // 指定位置に追加する場合
    }
    setAttributes({ items: newItems });
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setAttributes({ items: newItems });
  };

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__('Rating Items', 'text-domain')}>
          <Button className="is-secondary" onClick={addItem}>
            項目を追加
          </Button>
        </PanelBody>
      </InspectorControls>

      <Evaluation attributes={attributes} />

      <div className="evaluation-edit">
        <div className="evaluation-edit-title">
          <TextControl
            label="タイトル"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
            placeholder="タイトルを入力"
          />
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={droppableId}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="evaluation-edit-droppable"
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="evaluation-edit-draggable"
                      >
                        <div className="evaluation-edit-draggable-content">
                          <TextControl
                            label="項目名"
                            value={item.name}
                            onChange={(value) => updateItem(index, 'name', value)}
                            ref={(el) => (refs.current[index] = el)}
                          />
                          <RangeControl
                            label="評価値"
                            value={item.rating}
                            onChange={(value) => updateItem(index, 'rating', value)}
                            min={0}
                            max={5}
                            step={0.5}
                          />
                        </div>

                        <div className="evaluation-edit-draggable-footer">
                          <Button className="is-secondary is-small" onClick={() => addItem(index)}>
                            項目を追加
                          </Button>
                          {items.length > 1 && (
                            <Button
                              className="is-secondary is-destructive is-small"
                              onClick={() => deleteItem(index)}
                            >
                              項目を削除
                            </Button>
                          )}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default Edit;
