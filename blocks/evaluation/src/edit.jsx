import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl, Button } from '@wordpress/components';
import { useRef, useEffect } from '@wordpress/element';
import { renderStars } from './libs/renderStars';
import Evaluation from './components/Evaluation';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { calculateOverallRating } from './libs/calculateOverallRating';

function Edit({ attributes, setAttributes }) {
  const { title, items } = attributes;
  const refs = useRef([]);
  const focusedIndex = useRef(null); // 新しいフォーカスするアイテムのインデックスを保持するためのref
  const overallRating = calculateOverallRating(items).toFixed(2);

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
            {__('Add Item', 'text-domain')}
          </Button>
        </PanelBody>
      </InspectorControls>

      <Evaluation attributes={attributes} />

      <div className="evaluation-name">
        <TextControl
          label={__('Evaluation Name', 'text-domain')}
          value={title}
          onChange={(value) => setAttributes({ title: value })}
        />
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="items-list">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="rating-item"
                    >
                      <TextControl
                        label={__('Item Name', 'text-domain')}
                        value={item.name}
                        onChange={(value) => updateItem(index, 'name', value)}
                        ref={(el) => (refs.current[index] = el)}
                      />
                      <RangeControl
                        label={__('Rating', 'text-domain')}
                        value={item.rating}
                        onChange={(value) => updateItem(index, 'rating', value)}
                        min={0}
                        max={5}
                        step={0.5}
                      />
                      <div className="stars-rating">{renderStars(item.rating)}</div>

                      <Button className="is-secondary is-small" onClick={() => addItem(index)}>
                        Add Item
                      </Button>
                      {items.length > 1 && (
                        <Button
                          className="is-secondary is-destructive is-small"
                          onClick={() => deleteItem(index)}
                        >
                          {__('Remove Item', 'text-domain')}
                        </Button>
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="overall-rating">
        {overallRating}
        <strong>{__('Overall Rating:', 'text-domain')}</strong>
        {isNaN(overallRating) ? __('No ratings yet', 'text-domain') : renderStars(overallRating)}
      </div>
    </div>
  );
}

export default Edit;
