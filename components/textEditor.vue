<template>
  <div>
    <!-- Tiptap -->
    <div class="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
      <div id="hs-editor-tiptap">
        <div class="flex align-middle gap-x-0.5 border-b border-gray-200 p-2">
          <button
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            type="button"
            data-hs-editor-bold=""
          >
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M14 12a4 4 0 0 0 0-8H6v8"></path>
              <path d="M15 20a4 4 0 0 0 0-8H6v8Z"></path>
            </svg>
          </button>
          <button
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            type="button"
            data-hs-editor-italic=""
          >
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="19" x2="10" y1="4" y2="4"></line>
              <line x1="14" x2="5" y1="20" y2="20"></line>
              <line x1="15" x2="9" y1="4" y2="20"></line>
            </svg>
          </button>
          <button
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            type="button"
            data-hs-editor-underline=""
          >
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
              <line x1="4" x2="20" y1="20" y2="20"></line>
            </svg>
          </button>
          <button
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            type="button"
            data-hs-editor-strike=""
          >
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 4H9a3 3 0 0 0-2.83 4"></path>
              <path d="M14 12a4 4 0 0 1 0 8H6"></path>
              <line x1="4" x2="20" y1="12" y2="12"></line>
            </svg>
          </button>
          <button
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            type="button"
            data-hs-editor-link=""
          >
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
              ></path>
              <path
                d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
              ></path>
            </svg>
          </button>
          <button
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            type="button"
            data-hs-editor-ol=""
          >
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="10" x2="21" y1="6" y2="6"></line>
              <line x1="10" x2="21" y1="12" y2="12"></line>
              <line x1="10" x2="21" y1="18" y2="18"></line>
              <path d="M4 6h1v4"></path>
              <path d="M4 10h2"></path>
              <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
            </svg>
          </button>
          <button
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            type="button"
            data-hs-editor-ul=""
          >
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="8" x2="21" y1="6" y2="6"></line>
              <line x1="8" x2="21" y1="12" y2="12"></line>
              <line x1="8" x2="21" y1="18" y2="18"></line>
              <line x1="3" x2="3.01" y1="6" y2="6"></line>
              <line x1="3" x2="3.01" y1="12" y2="12"></line>
              <line x1="3" x2="3.01" y1="18" y2="18"></line>
            </svg>
          </button>
          <button
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            type="button"
            data-hs-editor-blockquote=""
          >
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17 6H3"></path>
              <path d="M21 12H8"></path>
              <path d="M21 18H8"></path>
              <path d="M3 12v6"></path>
            </svg>
          </button>
          <button
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            type="button"
            data-hs-editor-code=""
          >
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m18 16 4-4-4-4"></path>
              <path d="m6 8-4 4 4 4"></path>
              <path d="m14.5 4-5 16"></path>
            </svg>
          </button>
        </div>

        <div
          class="h-[10rem] overflow-auto text-sm"
          ref="editor"
          data-hs-editor-field=""
        ></div>
      </div>
    </div>
    <!-- End Tiptap -->
  </div>
</template>

<script lang="ts">
import { Editor } from "@tiptap/core";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from "@tiptap/extension-blockquote";

export default {
  mounted() {
    const editor = new Editor({
      element: this.$refs.editor,
      extensions: [
        Placeholder.configure({
          placeholder: "Description (min 30 characters)...",
          emptyNodeClass: "text-gray-600",
        }),
        StarterKit,
        Paragraph.configure({
          HTMLAttributes: {
            class: "text-gray-600",
          },
        }),
        Bold.configure({
          HTMLAttributes: {
            class: "font-bold",
          },
        }),
        Underline,
        Link.configure({
          HTMLAttributes: {
            class:
              "inline-flex items-center gap-x-1 text-blue-500 decoration-2 hover:underline font-medium",
          },
        }),
        BulletList.configure({
          HTMLAttributes: {
            class: "list-disc list-inside text-gray-800",
          },
        }),
        OrderedList.configure({
          HTMLAttributes: {
            class: "list-decimal list-inside text-gray-800",
          },
        }),
        Blockquote.configure({
          HTMLAttributes: {
            class: "text-gray-800 sm:text-xl",
          },
        }),
      ],

      onUpdate: ({ editor }) => {

        this.updateContent(editor.getHTML());
      },
    });

    const actions = [
      {
        id: "[data-hs-editor-bold]",
        fn: () => editor.chain().focus().toggleBold().run(),
      },
      {
        id: "[data-hs-editor-italic]",
        fn: () => editor.chain().focus().toggleItalic().run(),
      },
      {
        id: "[data-hs-editor-underline]",
        fn: () => editor.chain().focus().toggleUnderline().run(),
      },
      {
        id: "[data-hs-editor-strike]",
        fn: () => editor.chain().focus().toggleStrike().run(),
      },
      {
        id: "[data-hs-editor-link]",
        fn: () => {
          const url = window.prompt("URL");
          if (url) {
            editor
              .chain()
              .focus()
              .extendMarkRange("link")
              .setLink({ href: url })
              .run();
          }
        },
      },
      {
        id: "[data-hs-editor-ol]",
        fn: () => editor.chain().focus().toggleOrderedList().run(),
      },
      {
        id: "[data-hs-editor-ul]",
        fn: () => editor.chain().focus().toggleBulletList().run(),
      },
      {
        id: "[data-hs-editor-blockquote]",
        fn: () => editor.chain().focus().toggleBlockquote().run(),
      },
      {
        id: "[data-hs-editor-code]",
        fn: () => editor.chain().focus().toggleCode().run(),
      },
    ];

    actions.forEach(({ id, fn }) => {

      const action = document.querySelector(id);
      if (action) {
        action.addEventListener("click", fn);
      }
    });
    editor.commands.setContent(Placeholder);
  },
  methods: {
    updateContent(this: { content: any; $emit: Function }, html: string) {
      this.content = html;
      this.$emit("create-descript",this.content);
    },
  },
  data() {
    return {
      content: "",
    };
  },
};
</script>

<style>
.ProseMirror {
  padding: 10px;
}
.ProseMirror:focus {
  outline: none;
}

.tiptap ul p,
.tiptap ol p {
  display: inline;
}

.tiptap p.is-editor-empty:first-child::before {
  font-size: 14px;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
.is-editor-empty::before {
  font-size: 14px;
  content: attr(data-placeholder);
  color: #a0aec0;
}
</style>
