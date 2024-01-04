(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [440],
  {
    8440: function (e) {
      var t;
      self,
        (e.exports =
          (Object.defineProperty((t = {}), "__esModule", { value: !0 }),
          (t.FitAddon = void 0),
          (t.FitAddon = class {
            activate(e) {
              this._terminal = e;
            }
            dispose() {}
            fit() {
              let e = this.proposeDimensions();
              if (!e || !this._terminal || isNaN(e.cols) || isNaN(e.rows))
                return;
              let t = this._terminal._core;
              (this._terminal.rows === e.rows &&
                this._terminal.cols === e.cols) ||
                (t._renderService.clear(),
                this._terminal.resize(e.cols, e.rows));
            }
            proposeDimensions() {
              if (
                !this._terminal ||
                !this._terminal.element ||
                !this._terminal.element.parentElement
              )
                return;
              let e = this._terminal._core,
                t = e._renderService.dimensions;
              if (0 === t.css.cell.width || 0 === t.css.cell.height) return;
              let r =
                  0 === this._terminal.options.scrollback
                    ? 0
                    : e.viewport.scrollBarWidth,
                i = window.getComputedStyle(
                  this._terminal.element.parentElement
                ),
                s = parseInt(i.getPropertyValue("height")),
                l = Math.max(0, parseInt(i.getPropertyValue("width"))),
                n = window.getComputedStyle(this._terminal.element),
                a =
                  s -
                  (parseInt(n.getPropertyValue("padding-top")) +
                    parseInt(n.getPropertyValue("padding-bottom"))),
                o =
                  l -
                  (parseInt(n.getPropertyValue("padding-right")) +
                    parseInt(n.getPropertyValue("padding-left"))) -
                  r;
              return {
                cols: Math.max(2, Math.floor(o / t.css.cell.width)),
                rows: Math.max(1, Math.floor(a / t.css.cell.height)),
              };
            }
          }),
          t));
    },
  },
]);
